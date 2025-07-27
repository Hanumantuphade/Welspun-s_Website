// app/curtains/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";
import { Product } from "@/types";

export default function CurtainsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Demo hardcoded products (remove these after adding real data)
  const demoProducts: Product[] = [
    {
      id: 997,
      name: "Demo: Elegant Floral Print Room Darkening Curtains Set of 2",
      price: 1799,
      originalPrice: 2299,
      rating: 4.5,
      reviews: 110,
      image: "/images/CurtainSection/cr1/c1.png",
      images: [],
      colors: ["Grey", "Charcoal"],
      sizes: ["4x5 ft", "5x7 ft"],
      description: "Demo product - Premium room darkening curtains",
      returnPolicy: "30 days return policy",
      careInstructions: "Dry clean recommended",
      manufactureDetail: "Made in India",
      category: "curtains",
    },
    {
      id: 996,
      name: "Demo: Blooming Vines Floral Midnight Blue Blackout Curtains Set Of 2",
      price: 1299,
      originalPrice: 1599,
      rating: 4.2,
      reviews: 85,
      image: "/images/CurtainSection/cr2/c1.png",
      images: [],
      colors: ["Midnight Blue", "Navy"],
      sizes: ["4x5 ft", "5x7 ft"],
      description:
        "Demo product - Heavy satin blackout curtains with floral design",
      returnPolicy: "30 days return policy",
      careInstructions: "Machine washable cold",
      manufactureDetail: "Made in India",
      category: "curtains",
    },
  ];

  useEffect(() => {
    const fetchCurtainProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/products/category/curtains");

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const apiProducts = await response.json();

        // Combine API products with demo products
        // Remove demoProducts from this line after you have real data
        const allProducts = [...demoProducts, ...apiProducts];

        setProducts(allProducts);
      } catch (err) {
        console.error("Error fetching curtain products:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load products"
        );

        // Fallback to demo products only if API fails
        setProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchCurtainProducts();
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
          <p className="text-gray-600">Loading curtain products...</p>
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
      {/* Offer Banner */}
      <div className="bg-gray-900 text-white text-center py-2 px-2 text-xs sm:text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs sm:text-sm text-gray-500 truncate">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Curtains</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-auto sm:h-[500px] lg:h-[600px] bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/CurtainSection/hero1.png"
            alt="Decor Curtains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        {/* Centered Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 max-w-3xl mx-auto py-8 sm:py-12 lg:py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-3">
            Decor Curtains Collection
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed mb-4">
            Customised Décor Curtains, tailored to your exact size and style.
          </p>
          <p className="text-xs sm:text-sm text-gray-200 mb-6">
            Over 3400 premium designs in sheer, blackout, velvet, and more.
          </p>

          {/* Scrollable fabric box (if needed) */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 text-left text-white shadow-lg max-w-full w-full sm:w-[90%] md:w-[80%] max-h-[220px] overflow-y-auto">
            <h2 className="text-base sm:text-lg font-semibold mb-3">
              Available Fabrics
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 text-sm list-disc list-inside">
              <li>Sheer</li>
              <li>Velvet</li>
              <li>White Out Satin</li>
              <li>Matt Finish</li>
              <li>Jacquard Finish</li>
              <li>Suede</li>
              <li>Twill</li>
            </ul>
            <p className="mt-3 text-sm italic text-gray-100">
              Over 3400+ designs available
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-full mx-auto pt-8 px-4 sm:px-6 lg:px-16 pb-16">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {error && products.length > 0 && (
              <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded">
                <p className="text-yellow-800 text-sm">
                  <strong>Notice:</strong> Some products may not be up to date.{" "}
                  {error}
                </p>
              </div>
            )}

            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing {products.length} curtain product
                {products.length !== 1 ? "s" : ""}
                {products.some((p) => p.id >= 996) && (
                  <span className="text-xs text-blue-600 ml-2">
                    (Including demo products)
                  </span>
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.category}/${product.id}`}
                >
                  <div className="group border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-all duration-300">
                    {product.id >= 996 && (
                      <div className="mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          Demo
                        </span>
                      </div>
                    )}

                    <div className="relative bg-gray-100 overflow-hidden mb-3 aspect-square rounded">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/api/placeholder/300/300";
                        }}
                      />
                    </div>

                    <h3 className="font-medium text-sm sm:text-base text-gray-900 group-hover:text-amber-900 transition-colors mb-1 line-clamp-2">
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
                      <span className="text-xs text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-base font-semibold text-gray-900">
                        ₹{product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <>
                          <span className="text-xs text-gray-500 line-through">
                            ₹{product.originalPrice}
                          </span>
                          <span className="text-xs text-green-600 font-medium">
                            {Math.round(
                              ((product.originalPrice - product.price) /
                                product.originalPrice) *
                                100
                            )}
                            % OFF
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {products.length === 0 && !loading && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  No curtains found
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Check back soon for new curtain products!
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
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
