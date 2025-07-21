// app/api/cart/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { getUserIdFromCookie } from '@/lib/auth-middleware';

// GET - Fetch user's cart items
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
        ci.id,
        ci.quantity,
        ci.size,
        ci.color,
        p.id as product_id,
        p.name,
        p.price,
        p.image,
        p.category
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      WHERE ci.user_id = $1
      ORDER BY ci.created_at DESC
    `;

    const result = await pool.query(query, [userId]);
    
    const cartItems = result.rows.map(row => ({
      id: row.product_id,
      name: row.name,
      price: row.price,
      image: row.image,
      size: row.size,
      color: row.color,
      quantity: row.quantity,
      category: row.category
    }));

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cart' },
      { status: 500 }
    );
  }
}

// POST - Add item to cart
export async function POST(request: NextRequest) {
  try {
    const userId = getUserIdFromCookie(request);
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { productId, size, color, quantity = 1 } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    // Check if item already exists in cart
    const existingQuery = `
      SELECT id, quantity FROM cart_items 
      WHERE user_id = $1 AND product_id = $2 AND size = $3 AND color = $4
    `;
    
    const existingResult = await pool.query(existingQuery, [userId, productId, size || '', color || '']);

    if (existingResult.rows.length > 0) {
      // Update quantity
      const updateQuery = `
        UPDATE cart_items 
        SET quantity = quantity + $1, updated_at = CURRENT_TIMESTAMP
        WHERE id = $2
        RETURNING *
      `;
      
      await pool.query(updateQuery, [quantity, existingResult.rows[0].id]);
    } else {
      // Insert new item
      const insertQuery = `
        INSERT INTO cart_items (user_id, product_id, quantity, size, color)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
      
      await pool.query(insertQuery, [userId, productId, quantity, size || '', color || '']);
    }

    return NextResponse.json({ message: 'Item added to cart' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json(
      { error: 'Failed to add to cart' },
      { status: 500 }
    );
  }
}

// DELETE - Clear entire cart
export async function DELETE(request: NextRequest) {
  try {
    const userId = getUserIdFromCookie(request);
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const query = `DELETE FROM cart_items WHERE user_id = $1`;
    await pool.query(query, [userId]);

    return NextResponse.json({ message: 'Cart cleared' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    return NextResponse.json(
      { error: 'Failed to clear cart' },
      { status: 500 }
    );
  }
}
