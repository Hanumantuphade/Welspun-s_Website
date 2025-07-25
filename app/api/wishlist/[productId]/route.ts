// app/api/wishlist/[productId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { getUserIdFromCookie } from '@/lib/auth-middleware';

// DELETE - Remove item from wishlist
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const userId = getUserIdFromCookie(request);
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Await the params since it's now a Promise in Next.js 15
    const { productId: productIdParam } = await params;
    const productId = parseInt(productIdParam);
    
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }

    const query = `
      DELETE FROM wishlist_items 
      WHERE user_id = $1 AND product_id = $2
    `;

    await pool.query(query, [userId, productId]);

    return NextResponse.json({ message: 'Item removed from wishlist' });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return NextResponse.json(
      { error: 'Failed to remove from wishlist' },
      { status: 500 }
    );
  }
}

// GET - Check if item is in wishlist
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const userId = getUserIdFromCookie(request);
    
    if (!userId) {
      return NextResponse.json({ inWishlist: false });
    }

    // Await the params since it's now a Promise in Next.js 15
    const { productId: productIdParam } = await params;
    const productId = parseInt(productIdParam);
    
    if (isNaN(productId)) {
      return NextResponse.json({ inWishlist: false });
    }

    const query = `
      SELECT id FROM wishlist_items 
      WHERE user_id = $1 AND product_id = $2
    `;

    const result = await pool.query(query, [userId, productId]);

    return NextResponse.json({ inWishlist: result.rows.length > 0 });
  } catch (error) {
    console.error('Error checking wishlist:', error);
    return NextResponse.json({ inWishlist: false });
  }
}
