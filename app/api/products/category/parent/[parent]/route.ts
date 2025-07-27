// app/api/products/category/parent/[parent]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ProductService } from '@/lib/products';

// Define parent-child relationships
const categoryHierarchy = {
  'bath': ['bath', 'hand-towels', 'towels'],
  'bed': ['bed', 'bedsheets', 'blankets', 'embrace', 'fitted', 'premium', 'single'],
  'mattress': ['mattress', 'otherapedic-mattress']
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ parent: string }> }
) {
  try {
    const { parent } = await params;
    
    if (!categoryHierarchy[parent as keyof typeof categoryHierarchy]) {
      return NextResponse.json(
        { error: 'Invalid parent category' },
        { status: 400 }
      );
    }

    const childCategories = categoryHierarchy[parent as keyof typeof categoryHierarchy];
    const allProducts = [];

    // Fetch products from all child categories
    for (const category of childCategories) {
      try {
        const products = await ProductService.getProductsByCategory(category);
        allProducts.push(...products);
      } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error);
      }
    }

    return NextResponse.json(allProducts);
  } catch (error) {
    console.error('Error fetching products by parent category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
