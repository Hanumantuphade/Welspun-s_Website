// app/api/cart/[productId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { getUserIdFromCookie } from '@/lib/auth-middleware';

// DELETE - Remove specific item from cart
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

    const url = new URL(request.url);
    const size = url.searchParams.get('size') || '';
    const color = url.searchParams.get('color') || '';

    const query = `
      DELETE FROM cart_items 
      WHERE user_id = $1 AND product_id = $2 AND size = $3 AND color = $4
    `;

    await pool.query(query, [userId, productId, size, color]);

    return NextResponse.json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Error removing from cart:', error);
    return NextResponse.json(
      { error: 'Failed to remove from cart' },
      { status: 500 }
    );
  }
}

// PATCH - Update item quantity
export async function PATCH(
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

    const { delta, size, color } = await request.json();

    // Validate delta
    if (typeof delta !== 'number') {
      return NextResponse.json(
        { error: 'Invalid quantity delta' },
        { status: 400 }
      );
    }

    const query = `
      UPDATE cart_items 
      SET quantity = GREATEST(quantity + $1, 0)
      WHERE user_id = $2 AND product_id = $3 AND size = $4 AND color = $5
    `;

    await pool.query(query, [delta, userId, productId, size || '', color || '']);

    // Remove item if quantity becomes 0 or negative
    if (delta < 0) {
      const deleteQuery = `
        DELETE FROM cart_items 
        WHERE user_id = $1 AND product_id = $2 AND size = $3 AND color = $4 AND quantity <= 0
      `;
      await pool.query(deleteQuery, [userId, productId, size || '', color || '']);
    }

    return NextResponse.json({ message: 'Cart updated' });
  } catch (error) {
    console.error('Error updating cart:', error);
    return NextResponse.json(
      { error: 'Failed to update cart' },
      { status: 500 }
    );
  }
}
