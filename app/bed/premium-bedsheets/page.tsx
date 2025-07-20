// app/bed/premium-bedsheets/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types";

export default function PremiumBedsheetsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Demo hardcoded products (remove these after adding real data)
  const demoProducts: Product[] = [
    {
      id: 985,
      name: "Demo: Premium Cotton Bedsheet",
      price: 1499,
      originalPrice: 1899,
      rating: 4.6,
      reviews: 150,
      image: "/topSeller/premium/s1.jpeg",
      images: ["/topSeller/premium/s1.jpeg"],
      colors: ["White", "Cream"],
      sizes: ["Double", "Queen", "King"],
      description: "Soft and elegant premium cotton bedsheet with luxury finish",
      returnPolicy: "30 days return policy",
      careInstructions: "Machine washable, gentle cycle",
      manufactureDetail: "100% premium cotton with luxury weave",
      category: "premium-bedsheets",
    },
    {
      id: 984,
      name: "Demo: Luxury Collection Bedsheet",
      price: 2499,
      originalPrice: 3199,
      rating: 4.8,
      reviews: 200,
      image: "/topSeller/premium/s3.jpeg",
      images: ["/topSeller/premium/s3.jpeg"],
      colors: ["Royal Blue", "Golden"],
      sizes: ["Queen", "King"],
      description: "Transform your bedroom into a luxury suite with this premium collection",
      returnPolicy: "30 days return policy",
      careInstructions: "Dry clean recommended for best results",
      manufactureDetail: "Premium luxury fabric with gold threading",
      category: "premium-bedsheets",
    },
  ];

  useEffect(() => {
    const fetchPremiumProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/products/category/premium-bedsheets');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const apiProducts = await response.json();
        
        // Combine API products with demo products
        const allProducts = [...demoProducts, ...apiProducts];
        
        setProducts(allProducts);
      } catch (err) {
        console.error('Error fetching premium bedsheet products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load products');
        
        // Fallback to demo products only if API fails
        setProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchPremiumProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
          Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
        </div>
        <Header />
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading premium bedsheet products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white max-w-full w-full mx-auto px-4 pb-6">
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-full w-full mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Bed</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Premium</span>
          </nav>
        </div>
      </div>

      {/* Background Image with Overlay and Text */}
      <div className="relative md:h-[440px] lg:h-[530px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/topSeller/hero1.png"
            alt="Premium Bedsheet Collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white px-4">
          <h1 className="text-4xl font-light bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent mb-2">
            Premium Bedsheet Collection
          </h1>
          <p className="text-gray-100">
            <span className="text-xl">
              Transform your bedroom with our luxurious bedsheet range.
            </span>
            <br />
            <span className="text-lg">
              Discover ultra-soft fabrics and elegant designs for ultimate comfort.
            </span>
            <br />
            <span className="hidden md:block">Drift into a peaceful sleep and wake up feeling refreshed.</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-10">
        {/* Show error message if there's an error but we have fallback products */}
        {error && products.length > 0 && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded">
            <p className="text-yellow-800">
              <strong>Notice:</strong> Some products may not be up to date. {error}
            </p>
          </div>
        )}

        {/* Products count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {products.length} premium bedsheet product{products.length !== 1 ? 's' : ''}
            {products.some(p => p.id >= 984) && (
              <span className="text-sm text-blue-600 ml-2">
                (Including demo products)
              </span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:px-12 gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.category}/${product.id}`}
            >
              <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300">
                {/* Demo product badge */}
                {product.id >= 984 && (
                  <div className="relative">
                    <span className="absolute top-2 left-2 z-10 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Demo
                    </span>
                  </div>
                )}
                
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/400/400';
                    }}
                  />
                </div>
                
                <div className="p-4">
                  <h2 className="text-xl font-medium line-clamp-2 mb-2">{product.name}</h2>
                  
                  {product.description && (
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">{product.description}</p>
                  )}

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-2">
                    <p className="text-orange-600 font-semibold text-lg">
                      ₹{product.price.toLocaleString()}
                    </p>
                    {product.originalPrice > product.price && (
                      <>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-green-600 font-medium">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  {/* Available sizes */}
                  {product.sizes?.length > 0 && (
                    <p className="text-xs text-gray-500 mb-3">
                      Sizes: {product.sizes.slice(0, 3).join(', ')}
                    </p>
                  )}

                  <button className="w-full bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No products message */}
        {products.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No premium bedsheets found</h3>
            <p className="text-gray-500 mb-4">Check back soon for new premium bedsheet products!</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
