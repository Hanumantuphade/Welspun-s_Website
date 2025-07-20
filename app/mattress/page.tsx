// app/mattress/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";
import { Product } from "@/types";

export default function MattressPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  // Demo hardcoded products (remove these after adding real data)
  const demoProducts: Product[] = [
    {
      id: 993,
      name: "Demo: Luxury Mattress (8 inch height)",
      price: 9999,
      originalPrice: 12999,
      rating: 4.5,
      reviews: 120,
      image: "/images/MattressSection/mat1/m1.png",
      images: [],
      colors: ["White"],
      sizes: ["Single", "Double", "Queen", "King"],
      description: "Demo product - Premium 8-inch luxury mattress with superior comfort",
      returnPolicy: "30 days return policy",
      careInstructions: "Regular rotation recommended",
      manufactureDetail: "Made with premium materials",
      category: "mattress",
    },
    {
      id: 992,
      name: "Demo: Yours'n'Mine Medium-Firm Mattress (6 inch height)",
      price: 11999,
      originalPrice: 15999,
      rating: 4.2,
      reviews: 95,
      image: "/images/MattressSection/mat3/m1.png",
      images: [],
      colors: ["Beige"],
      sizes: ["Single", "Double", "Queen", "King"],
      description: "Demo product - Medium-firm 6-inch mattress perfect for balanced support",
      returnPolicy: "30 days return policy",
      careInstructions: "Keep dry and well-ventilated",
      manufactureDetail: "Orthopedic design for spine support",
      category: "mattress",
    },
  ];

  useEffect(() => {
    const fetchMattressProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/products/category/mattress');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const apiProducts = await response.json();
        
        // Combine API products with demo products
        // Remove demoProducts from this line after you have real data
        const allProducts = [...demoProducts, ...apiProducts];
        
        setProducts(allProducts);
        setFilteredProducts(allProducts); // initially show all
      } catch (err) {
        console.error('Error fetching mattress products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load products');
        
        // Fallback to demo products only if API fails
        setProducts(demoProducts);
        setFilteredProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchMattressProducts();
  }, []);

  // Handle Price Range change
  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range]
    );
  };

  // Handle Size change
  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  // Apply filters
  useEffect(() => {
    let filtered = products;

    // Filter by price ranges
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) =>
        selectedPriceRanges.some((range) => {
          const price = product.price;
          if (range === "Under ₹10,000") return price < 10000;
          if (range === "₹10,000 - ₹20,000")
            return price >= 10000 && price <= 20000;
          if (range === "₹20,000 - ₹30,000")
            return price >= 20000 && price <= 30000;
          if (range === "Above ₹30,000") return price > 30000;
        })
      );
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => selectedSizes.includes(size))
      );
    }

    setFilteredProducts(filtered);
  }, [selectedPriceRanges, selectedSizes, products]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
          Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
        </div>
        <Header />
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading mattress products...</p>
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Mattress</span>
          </nav>
        </div>
      </div>

      {/* Background Image with Overlay and Text */}
      <div className="relative h-[410px] lg:h-[420px] xl:h-[500px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/images/MattressSection/hero.png"
            alt="Comfort Mattress Collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white px-4">
          <h1 className="text-4xl font-light bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2">
            Comfort Mattress Collection
          </h1>
          <p className="text-gray-100">
            <span className="text-xl">Upgrade your sleep with mattresses designed for ultimate comfort.</span>
            <span className="text-lg hidden md:block">Balanced support and plush cushioning for peaceful nights.</span>
            <span className="hidden md:block">Experience the difference of quality sleep every day.</span>
          </p>
        </div>
      </div>

      <div className="w-full max-w-full mx-auto pt-10 px-2 md:px-12 lg:px-16 xl:px-16 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            {/* Price Range Filter */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-2">
                {["Under ₹10,000", "₹10,000 - ₹20,000", "₹20,000 - ₹30,000", "Above ₹30,000"].map((range) => (
                  <label key={range} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.includes(range)}
                      onChange={() => handlePriceRangeChange(range)}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
              <div className="space-y-2">
                {["Single", "Double", "Queen", "King"].map((size) => (
                  <label key={size} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">{size}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Show error message if there's an error but we have fallback products */}
            {error && products.length > 0 && (
              <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded">
                <p className="text-yellow-800">
                  <strong>Notice:</strong> Some products may not be up to date. {error}
                </p>
              </div>
            )}

            {/* Products count and filters status */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} mattress product{products.length !== 1 ? 's' : ''}
                {products.some(p => p.id >= 992) && (
                  <span className="text-sm text-blue-600 ml-2">
                    (Including demo products)
                  </span>
                )}
              </p>
              
              {/* Clear filters button */}
              {(selectedPriceRanges.length > 0 || selectedSizes.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedPriceRanges([]);
                    setSelectedSizes([]);
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.category}/${product.id}`}
                >
                  <div className="group border-2 border-gray-200 cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Demo product badge */}
                    {product.id >= 992 && (
                      <div className="relative">
                        <span className="absolute top-2 left-2 z-20 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          Demo
                        </span>
                      </div>
                    )}
                    
                    <div className="relative bg-gray-100 overflow-hidden mb-4">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/api/placeholder/300/300';
                          }}
                        />
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                          Free Delivery
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <h3 className="font-medium text-gray-900 group-hover:text-amber-900 transition-colors line-clamp-2">
                        {product.name}
                      </h3>

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
                        <span className="text-sm text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-900">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-green-600 font-medium">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                          </span>
                        )}
                      </div>

                      <div className="text-sm text-gray-600">
                        Available in: {product.sizes.slice(0, 2).join(", ")}
                        {product.sizes.length > 2 && ` +${product.sizes.length - 2} more`}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No products message */}
            {filteredProducts.length === 0 && !loading && (
              <div className="text-center py-20">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {products.length === 0 ? "No mattresses found" : "No mattresses match your filters"}
                </h3>
                <p className="text-gray-500 mb-4">
                  {products.length === 0 
                    ? "Check back soon for new mattress products!"
                    : "Try adjusting your price range or size filters."
                  }
                </p>
                {filteredProducts.length === 0 && products.length > 0 && (
                  <button
                    onClick={() => {
                      setSelectedPriceRanges([]);
                      setSelectedSizes([]);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                  >
                    Clear Filters
                  </button>
                )}
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Refresh Page
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
