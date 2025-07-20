// app/flooring/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types";

export default function FlooringPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Demo hardcoded products (remove these after adding real data)
  const demoProducts: Product[] = [
    {
      id: 995,
      name: "Demo: Tawny Hickory Multistile™ Tile",
      price: 799,
      originalPrice: 1099,
      rating: 4.2,
      reviews: 30,
      image: "https://cms.welspunflooring.com/uploads/HF_001586_41c77b4458.jpg",
      images: [],
      colors: ["Tawny Hickory"],
      sizes: ["600×600 mm"],
      description: "Demo product - Multistile™ Tile with premium wood finish",
      returnPolicy: "30 days return policy",
      careInstructions: "Easy maintenance with regular cleaning",
      manufactureDetail: "Made with premium materials",
      category: "flooring",
    },
    {
      id: 994,
      name: "Demo: Silver Striped Oak EDEN Collection",
      price: 999,
      originalPrice: 1299,
      rating: 4.5,
      reviews: 48,
      image: "https://cms.welspunflooring.com/uploads/SHF_00386_ff419dbb6e.jpg",
      images: [],
      colors: ["Silver Striped Oak"],
      sizes: ["1200×200 mm"],
      description: "Demo product - EDEN Collection with Click-N-Lock® technology",
      returnPolicy: "30 days return policy",
      careInstructions: "Water-resistant, easy to clean",
      manufactureDetail: "Made with advanced flooring technology",
      category: "flooring",
    },
  ];

  useEffect(() => {
    const fetchFlooringProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/products/category/flooring');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const apiProducts = await response.json();
        
        // Combine API products with demo products
        // Remove demoProducts from this line after you have real data
        const allProducts = [...demoProducts, ...apiProducts];
        
        setProducts(allProducts);
      } catch (err) {
        console.error('Error fetching flooring products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load products');
        
        // Fallback to demo products only if API fails
        setProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchFlooringProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
          Buy Products worth Rs. 1999/- get a Free Flooring Worth Rs. 999/-
        </div>
        <Header />
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading flooring products...</p>
        </div>
      </div>
    );
  }

  if (error && products.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
          Buy Products worth Rs. 1999/- get a Free Flooring Worth Rs. 999/-
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
        Buy Products worth Rs. 1999/- get a Free Flooring Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Flooring</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[410px] lg:h-[420px] xl:h-[500px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="/images/f1.jpeg"
            alt="Modern wood flooring"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-20 px-6 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            Styles that cater to different spaces and budgets
          </h1>
          <p className="text-lg text-gray-100 mb-2">
            Designs that impress the Earth as well
          </p>
          <p className="text-base text-gray-200">
            Premium flooring solutions for every home
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-full mx-auto pt-10 px-2 md:px-12 lg:px-16 xl:px-16 pb-16">
        {/* Show error message if there's an error but we have fallback products */}
        {error && products.length > 0 && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded max-w-7xl mx-auto">
            <p className="text-yellow-800">
              <strong>Notice:</strong> Some products may not be up to date. {error}
            </p>
          </div>
        )}

        {/* Products count */}
        <div className="mb-6 max-w-7xl mx-auto">
          <p className="text-gray-600">
            Showing {products.length} flooring product{products.length !== 1 ? 's' : ''}
            {products.some(p => p.id >= 994) && (
              <span className="text-sm text-blue-600 ml-2">
                (Including demo products)
              </span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.category}/${product.id}`}>
              <div className="group cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-amber-300">
                {/* Demo product badge */}
                {product.id >= 994 && (
                  <div className="relative">
                    <span className="absolute top-2 left-2 z-10 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Demo
                    </span>
                  </div>
                )}
                
                <div className="relative aspect-square bg-gray-100">
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
                
                <div className="p-4 space-y-2">
                  <h3 className="font-medium text-gray-900 group-hover:text-amber-900 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {product.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                  
                  <div className="flex items-center space-x-1">
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
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-900">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm line-through text-gray-500">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-green-600 font-medium">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  {/* Available sizes/colors if present */}
                  {(product.sizes?.length > 0 || product.colors?.length > 0) && (
                    <div className="text-xs text-gray-500 space-y-1">
                      {product.sizes?.length > 0 && (
                        <div>Sizes: {product.sizes.slice(0, 2).join(', ')}</div>
                      )}
                      {product.colors?.length > 0 && (
                        <div>Colors: {product.colors.slice(0, 2).join(', ')}</div>
                      )}
                    </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7c0-2.21-3.79-4-8-4S4 4.79 4 7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No flooring products found</h3>
            <p className="text-gray-500 mb-4">Check back soon for new flooring options!</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
