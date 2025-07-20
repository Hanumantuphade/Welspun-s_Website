// app/api/products/category/[category]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ProductService } from '@/lib/products';

const validCategories = [
  'bath', 'bed', 'fitted', 'premium-bedsheets', 
  'curtains', 'deals', 'flooring', 'mattress', 'rugs'
];

interface RouteParams {
  params: Promise<{ category: string }>
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { category } = await params;
    
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: 'Invalid category' },
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
