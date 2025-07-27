// app/mattress/otherapedic-mattress/page.tsx
"use client";

import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import PremiumProductGrid from "@/components/PremiumProductGrid";
import { Product } from "@/types";

// Demo products (keep as fallback)
const demoProducts = [
  {
    id: 983,
    name: "Demo: Ortho Comfort Mattress",
    image: "/topSeller/Orthopedic/m1.jpg",
    price: "₹8499",
    description: "Demo product - Provides excellent back support with high-density foam for optimal spinal alignment.",
  },
  {
    id: 982,
    name: "Demo: Spine Care Orthopedic Mattress",
    image: "/topSeller/Orthopedic/m2.jpg",
    price: "₹9499",
    description: "Demo product - Designed to align your spine for restful sleep and enhanced health benefits.",
  },
];

interface ProductGridItem {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

export default function OrthopedicMattressesPage() {
  const [products, setProducts] = useState<ProductGridItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrthopedicProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/products/category/otherapedic-mattress');
        
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
          description: product.description || `Premium orthopedic ${product.name.toLowerCase()} engineered for spinal alignment and back support.`
        }));

        // Combine demo products with API products
        const allProducts = [...demoProducts, ...transformedApiProducts];
        
        setProducts(allProducts);
      } catch (err) {
        console.error('Error fetching orthopedic mattress products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load products');
        
        // Fallback to demo products only if API fails
        setProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchOrthopedicProducts();
  }, []);

  // Loading component
  if (loading) {
    return (
      <PageLayout
        breadcrumbItems={[
          { label: "Home", link: "/" },
          { label: "Mattresses" },
          { label: "Orthopedic-Mattresses" },
        ]}
        heroImage="/images/MattressSection/mat3/m1.png"
        heroTitle="Orthopedic Mattresses Collection"
        heroSubtitle1="Experience unmatched back support with our orthopedic mattresses."
        heroSubtitle2="Engineered for spinal alignment and restful sleep."
        heroSubtitle3="Wake up refreshed and pain-free every morning."
      >
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading orthopedic mattress products...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "Mattresses" },
        { label: "Orthopedic-Mattresses" },
      ]}
      heroImage="/images/MattressSection/mat3/m1.png"
      heroTitle="Orthopedic Mattresses Collection"
      heroSubtitle1="Experience unmatched back support with our orthopedic mattresses."
      heroSubtitle2="Engineered for spinal alignment and restful sleep."
      heroSubtitle3="Wake up refreshed and pain-free every morning."
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
          Showing {products.length} orthopedic mattress product{products.length !== 1 ? 's' : ''}
          {products.some(p => p.id >= 982) && (
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">No orthopedic mattress products found</h3>
          <p className="text-gray-500 mb-4">
            {error 
              ? 'Unable to load products. Please try again later.' 
              : 'Check back soon for new orthopedic mattress products!'
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
              href="/mattress" 
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Browse All Mattresses
            </a>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
