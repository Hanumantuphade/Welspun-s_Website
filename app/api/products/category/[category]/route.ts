// app/api/products/category/[category]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ProductService } from '@/lib/products';

const validCategories = [
  // Bath categories
  'bath', 'hand-towels', 'towels',
  // Bed categories  
  'bed', 'bedsheets', 'blankets', 'embrace', 'fitted', 'premium', 'single',
  // Other categories
  'curtains', 'deals', 'flooring', 'mattress', 'otherapedic-mattress', 'rugs'
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params;
    
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: `Invalid category. Valid categories are: ${validCategories.join(', ')}` },
        { status: 400 }
      );
    }

    const products = await ProductService.getProductsByCategory(category);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
