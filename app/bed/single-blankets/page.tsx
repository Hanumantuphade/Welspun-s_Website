// app/bed/single/page.tsx
"use client";

import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";
import { Product } from "@/types";

// Demo products (keep as fallback)
const demoProducts = [
  {
    id: 985,
    name: "Demo: Warm Single Blanket",
    image: "/topSeller/Blankets/Single/s1.jpg",
    price: "₹1299",
    description: "Demo product - Stay cosy with this warm single blanket perfect for individual comfort.",
  },
  {
    id: 984,
    name: "Demo: Luxury Single Blanket",
    image: "/topSeller/Blankets/Single/s4.jpg",
    price: "₹1599",
    description: "Demo product - Add luxury to your sleep with this premium single blanket crafted for elegance.",
  },
];

interface ProductGridItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

export default function SingleBlanketsPage() {
  const [products, setProducts] = useState<ProductGridItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSingleProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/products/category/single');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const apiProducts: Product[] = await response.json();
        
        // Transform API products to match PremiumProductGrid format
        const transformedApiProducts: ProductGridItem[] = apiProducts.map(product => ({
          id: product.id,
          name: product.name,
          image: product.image,
          price: `₹${product.price.toLocaleString()}`,
          description: product.description || `Premium single ${product.name.toLowerCase()} perfect for individual comfort and style.`
        }));

        // Combine demo products with API products
        const allProducts = [...demoProducts, ...transformedApiProducts];
        
        setProducts(allProducts);
      } catch (err) {
        console.error('Error fetching single blanket products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load products');
        
        // Fallback to demo products only if API fails
        setProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProducts();
  }, []);

  // Loading component
  if (loading) {
    return (
      <PageLayout
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Bed" },
          { label: "Single-Blankets" },
        ]}
        heroImage="/topSeller/hero5.png"
        heroTitle="Single Blankets Collection"
        heroSubtitle1="Stay warm and comfortable with our premium single blankets."
        heroSubtitle2="Perfect for everyday use with soft fabrics and elegant designs."
        heroSubtitle3="Make your nights cosy and your bedroom stylish effortlessly."
      >
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading single blanket products...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Bed" },
        { label: "Single-Blankets" },
      ]}
      heroImage="/topSeller/hero5.png"
      heroTitle="Single Blankets Collection"
      heroSubtitle1="Stay warm and comfortable with our premium single blankets."
      heroSubtitle2="Perfect for everyday use with soft fabrics and elegant designs."
      heroSubtitle3="Make your nights cosy and your bedroom stylish effortlessly."
    >
      {/* Show error message if there's an error but we have fallback products */}
      {error && products.length > 0 && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded">
          <p className="text-yellow-800">
            <strong>Notice:</strong> Some products may not be up to date. {error}
          </p>
        </div>
      )}

      {/* Products count and demo indicator */}
      <div className="mb-6 text-center">
        <p className="text-gray-600">
          Showing {products.length} single blanket product{products.length !== 1 ? 's' : ''}
          {products.some(p => p.id >= 984) && (
            <span className="text-sm text-blue-600 ml-2">
              (Including demo products)
            </span>
          )}
        </p>
      </div>

      {/* Products Grid or No Products Message */}
      {products.length > 0 ? (
        <PremiumProductGrid products={products} />
      ) : (
        <div className="text-center py-20">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No single blanket products found</h3>
          <p className="text-gray-500 mb-4">
            {error 
              ? 'Unable to load products. Please try again later.' 
              : 'Check back soon for new single blanket products!'
            }
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
            <a 
              href="/bed" 
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Browse All Bed Products
            </a>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
