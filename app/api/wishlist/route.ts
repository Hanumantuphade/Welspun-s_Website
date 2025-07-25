// app/api/wishlist/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { getUserIdFromCookie } from '@/lib/auth-middleware';

// GET - Fetch user's wishlist items
export async function GET(request: NextRequest) {
  try {
    const userId = getUserIdFromCookie(request);
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const query = `
      SELECT 
        p.id,
        p.name,
        p.price,
        p.original_price,
        p.rating,
        p.reviews,
        p.image,
        p.images,
        p.colors,
        p.sizes,
        p.description,
        p.return_policy,
        p.care_instructions,
        p.manufacture_detail,
        p.category,
        wi.created_at as added_at
      FROM wishlist_items wi
      JOIN products p ON wi.product_id = p.id
      WHERE wi.user_id = $1
      ORDER BY wi.created_at DESC
    `;

    const result = await pool.query(query, [userId]);
    
    const wishlistItems = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      price: row.price,
      originalPrice: row.original_price,
      rating: parseFloat(row.rating),
      reviews: row.reviews,
      image: row.image,
      images: row.images,
      colors: row.colors,
      sizes: row.sizes,
      description: row.description,
      returnPolicy: row.return_policy,
      careInstructions: row.care_instructions,
      manufactureDetail: row.manufacture_detail,
      category: row.category,
      addedAt: row.added_at
    }));

    return NextResponse.json(wishlistItems);
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch wishlist' },
      { status: 500 }
    );
  }
}

// POST - Add item to wishlist
export async function POST(request: NextRequest) {
  try {
    const userId = getUserIdFromCookie(request);
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    // Check if item already exists in wishlist
    const existingQuery = `
      SELECT id FROM wishlist_items 
      WHERE user_id = $1 AND product_id = $2
    `;
    
    const existingResult = await pool.query(existingQuery, [userId, productId]);

    if (existingResult.rows.length > 0) {
      return NextResponse.json({ message: 'Item already in wishlist' });
    }

    // Insert new item
    const insertQuery = `
      INSERT INTO wishlist_items (user_id, product_id)
      VALUES ($1, $2)
      RETURNING *
    `;
    
    await pool.query(insertQuery, [userId, productId]);

    return NextResponse.json({ message: 'Item added to wishlist' });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return NextResponse.json(
      { error: 'Failed to add to wishlist' },
      { status: 500 }
    );
  }
}
