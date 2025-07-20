// app/bath/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types";

export default function BathPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Demo hardcoded products 
  const demoProducts: Product[] = [
    {
      id: 999,
      name: "Demo: Spectrum Blue 100% Cotton Hand Towel",
      price: 499,
      originalPrice: 699,
      rating: 4.5,
      reviews: 120,
      image: "/images/bathSection/bath1/b1.png",
      images: [],
      colors: ["Green", "White"],
      sizes: ["Standard"],
      description: "Demo product - Premium cotton hand towel",
      returnPolicy: "30 days return policy",
      careInstructions: "Machine washable",
      manufactureDetail: "Made in India",
      category: "bath",
    },
    {
      id: 998,
      name: "Demo: Camel-Light Brown 4 Piece Face Towel Set",
      price: 899,
      originalPrice: 1199,
      rating: 4.8,
      reviews: 210,
      image: "/images/bathSection/bath2/b1.png",
      images: [],
      colors: ["Brown", "Camel"],
      sizes: ["Large"],
      description: "Demo product - Soft cotton face towel set",
      returnPolicy: "30 days return policy",
      careInstructions: "Machine washable",
      manufactureDetail: "Made in India",
      category: "bath",
    },
  ];

  useEffect(() => {
    const fetchBathProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/products/category/bath');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const apiProducts = await response.json();
        
        // Combine API products with demo products
        // Remove demoProducts from this line after you have real data
        const allProducts = [...demoProducts, ...apiProducts];
        
        setProducts(allProducts);
      } catch (err) {
        console.error('Error fetching bath products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load products');
        
        // Fallback to demo products only if API fails
        setProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchBathProducts();
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
          <p className="text-gray-600">Loading bath products...</p>
        </div>
      </div>
    );
  }

  if (error && products.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
          Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
        </div>
        <Header />
        <div className="text-center py-20">
          <p className="text-red-600 mb-4">Error loading products: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      <section>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm text-gray-500">
              Home <span className="mx-2 text-gray-400">/</span>
              <span className="text-sky-600 font-medium">Bath</span>
            </nav>
          </div>
        </div>

        {/* Background Image with Overlay and Text */}
        <div className="relative h-[410px] lg:h-[420px] xl:h-[500px] flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src="/images/bathSection/hero.png"
              alt="Bath Collection Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 text-white px-4">
            <h1 className="text-4xl font-light bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2">
              Luxury Bath Collection
            </h1>
            <p className="text-gray-100">
              <span className="text-xl">
                Create a calming sanctuary in your bathroom with our premium collection.
              </span>
              <span className="text-lg hidden md:block">
                From absorbent towels to cosy robes, each piece offers ultimate comfort.
              </span>
              <span className="hidden md:block">
                Relax, unwind, and treat yourself to spa-level luxury every day.
              </span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-full mx-auto pt-10 px-2 md:px-12 lg:px-16 xl:px-16 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
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
                  Showing {products.length} product{products.length !== 1 ? 's' : ''}
                  {products.some(p => p.id >= 998) && (
                    <span className="text-sm text-blue-600 ml-2">
                      (Including demo products)
                    </span>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.category}/${product.id}`}
                  >
                    <div className="group border-2 border-gray-200 cursor-pointer p-4 rounded-lg hover:shadow-lg transition-all duration-300">
                      {/* Demo product badge */}
                      {product.id >= 998 && (
                        <div className="mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            Demo
                          </span>
                        </div>
                      )}
                      
                      <div className="relative bg-gray-100 overflow-hidden mb-4 aspect-square rounded">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/api/placeholder/300/300';
                          }}
                        />
                      </div>
                      
                      <h3 className="font-medium text-gray-900 group-hover:text-amber-900 transition-colors mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center space-x-1 mb-2">
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
                        <span className="text-sm text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-900">
                          ₹{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-green-600 font-medium">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                          </span>
                        )}
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-4">Check back soon for new bath products!</p>
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
