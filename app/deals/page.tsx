// app/deals/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star, Clock, Tag, ShoppingCart, Zap, FlameKindling, TrendingUp } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/app/context/CartContext";

interface DealProduct extends Product {
  discount: number;
  savings: number;
}

export default function DealsPage() {
  const [deals, setDeals] = useState<DealProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleDeals, setVisibleDeals] = useState(6);
  const { addToCart } = useCart();

  // Demo hardcoded deals (remove these after adding real data)
  const demoDeals: Product[] = [
    {
      id: 983,
      name: "Demo: Premium Bed Sheet Combo",
      price: 1499,
      originalPrice: 2999,
      rating: 4.5,
      reviews: 234,
      image: "/offers/f1.jpeg",
      images: ["/offers/f1.jpeg"],
      colors: ["White", "Blue"],
      sizes: ["Queen", "King"],
      description: "Demo product - Premium bed sheet combo with luxury finish",
      returnPolicy: "30 days return policy",
      careInstructions: "Machine washable",
      manufactureDetail: "100% cotton premium sheets",
      category: "deals",
    },
    {
      id: 982,
      name: "Demo: Luxury Towel Set",
      price: 899,
      originalPrice: 1599,
      rating: 4.3,
      reviews: 156,
      image: "/offers/f2.jpeg",
      images: ["/offers/f2.jpeg"],
      colors: ["White", "Gray"],
      sizes: ["Standard"],
      description: "Demo product - Luxury towel set with ultra-soft cotton",
      returnPolicy: "30 days return policy",
      careInstructions: "Machine washable, tumble dry low",
      manufactureDetail: "100% premium cotton towels",
      category: "deals",
    },
  ];

  useEffect(() => {
    const fetchDealsFromAllCategories = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch products from all categories
        const categories = ['bath', 'bed', 'fitted', 'premium-bedsheets', 'curtains', 'flooring', 'mattress', 'rugs'];
        const allProducts: Product[] = [];

        // Add demo deals first
        allProducts.push(...demoDeals);

        // Fetch from each category
        const fetchPromises = categories.map(async (category) => {
          try {
            const response = await fetch(`/api/products/category/${category}`);
            if (response.ok) {
              const products = await response.json();
              return products;
            }
            return [];
          } catch (error) {
            console.error(`Error fetching ${category} products:`, error);
            return [];
          }
        });

        const categoryResults = await Promise.all(fetchPromises);
        categoryResults.forEach(products => allProducts.push(...products));

        // Filter products that have discounts (originalPrice > price)
        const discountedProducts = allProducts.filter(product => 
          product.originalPrice > product.price
        );

        // Calculate discount percentage and savings for each product
        const dealsWithDiscounts: DealProduct[] = discountedProducts.map(product => ({
          ...product,
          discount: Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100),
          savings: product.originalPrice - product.price
        }));

        // Sort by discount percentage (highest first)
        dealsWithDiscounts.sort((a, b) => b.discount - a.discount);

        setDeals(dealsWithDiscounts);
      } catch (err) {
        console.error('Error fetching deals:', err);
        setError(err instanceof Error ? err.message : 'Failed to load deals');
        
        // Fallback to demo deals only if API fails
        const fallbackDeals = demoDeals.map(product => ({
          ...product,
          discount: Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100),
          savings: product.originalPrice - product.price
        }));
        setDeals(fallbackDeals);
      } finally {
        setLoading(false);
      }
    };

    fetchDealsFromAllCategories();
  }, []);

  const handleAddToCart = (deal: DealProduct) => {
    addToCart({
      id: deal.id,
      name: deal.name,
      price: deal.price,
      image: deal.image,
      size: deal.sizes?.[0] || '',
      color: deal.colors?.[0] || '',
    });
    alert(`${deal.name} added to cart!`);
  };

  const loadMoreDeals = () => {
    setVisibleDeals(prev => Math.min(prev + 6, deals.length));
  };

  const getDealInfo = (discount: number) => {
    if (discount >= 50) return { label: "Flash Sale", icon: Zap, color: "bg-purple-600" };
    if (discount >= 40) return { label: "Hot Deal", icon: FlameKindling, color: "bg-red-600" };
    if (discount >= 30) return { label: "Best Value", icon: TrendingUp, color: "bg-orange-600" };
    if (discount >= 20) return { label: "Good Deal", icon: Tag, color: "bg-blue-600" };
    return { label: "Sale", icon: Tag, color: "bg-green-600" };
  };

  const getTimeLeft = (index: number) => {
    // Generate pseudo-random time left for demo purposes
    const times = ["2 days left", "5 hours left", "1 day left", "3 days left", "6 hours left", "4 days left"];
    return times[index % times.length];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
          Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
        </div>
        <Header />
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading amazing deals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Deals</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="py-12 bg-gradient-to-r from-red-600 via-red-700 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">
            🔥 Hot Deals & Offers
          </h1>
          <p className="text-xl opacity-90 mb-2">
            {deals.length > 0 
              ? `${deals.length} amazing deals - Don't miss out!` 
              : 'Limited time offers - Don\'t miss out!'
            }
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm">
            <Clock className="h-4 w-4 mr-2" />
            Limited time offers
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Show error message if there's an error but we have fallback deals */}
        {error && deals.length > 0 && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800">
              <strong>Notice:</strong> Some deals may not be up to date. {error}
            </p>
          </div>
        )}

        {/* Deals count */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border">
            <span className="text-gray-600 font-medium">
              Showing {Math.min(visibleDeals, deals.length)} of {deals.length} deals
            </span>
            {deals.some(d => d.id >= 982) && (
              <span className="ml-3 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                Including demo deals
              </span>
            )}
          </div>
        </div>

        {/* Deals Grid */}
        {deals.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deals.slice(0, visibleDeals).map((deal, index) => {
                const dealInfo = getDealInfo(deal.discount);
                const DealIcon = dealInfo.icon;
                
                return (
                  <div
                    key={deal.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative">
                      {/* Badges Container */}
                      <div className="absolute inset-x-0 top-0 z-20 p-3">
                        <div className="flex justify-between items-start">
                          {/* Left side badges */}
                          <div className="flex flex-col gap-2">
                            {/* Demo product badge */}
                            {deal.id >= 982 && (
                              <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-md backdrop-blur">
                                Demo
                              </span>
                            )}
                            
                            {/* Deal type badge */}
                            <div className={`inline-flex items-center px-2 py-1 ${dealInfo.color} text-white text-xs font-medium rounded-md shadow-lg`}>
                              <DealIcon className="h-3 w-3 mr-1" />
                              {dealInfo.label}
                            </div>
                          </div>

                          {/* Discount badge */}
                          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold px-3 py-2 rounded-lg shadow-lg">
                            {deal.discount}% OFF
                          </div>
                        </div>
                      </div>

                      {/* Product Image */}
                      <Link href={`/product/${deal.category}/${deal.id}`}>
                        <div className="aspect-square relative bg-gray-100 overflow-hidden">
                          <Image
                            src={deal.image}
                            alt={deal.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/api/placeholder/300/300';
                            }}
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </Link>

                      {/* Time Left Bar */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-black/80 to-black/60 text-white py-2 px-3">
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="h-4 w-4 text-orange-400" />
                          <span className="text-sm font-semibold">{getTimeLeft(index)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      {/* Category */}
                      <div className="mb-3">
                        <span className="inline-block text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                          {deal.category.replace('-', ' ')}
                        </span>
                      </div>

                      <Link href={`/product/${deal.category}/${deal.id}`}>
                        <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-amber-900 transition-colors line-clamp-2 text-lg leading-tight">
                          {deal.name}
                        </h3>
                      </Link>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(deal.rating) 
                                  ? "text-yellow-400 fill-current" 
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {deal.rating} ({deal.reviews})
                        </span>
                      </div>

                      {/* Price Section */}
                      <div className="mb-4">
                        <div className="flex items-baseline space-x-2 mb-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ₹{deal.price.toLocaleString()}
                          </span>
                          <span className="text-lg text-gray-400 line-through">
                            ₹{deal.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        
                        {/* Savings highlight */}
                        <div className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 rounded-md">
                          <Tag className="h-3 w-3 mr-1" />
                          <span className="text-sm font-medium">
                            You save ₹{deal.savings.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Available options */}
                      {(deal.sizes?.length > 0 || deal.colors?.length > 0) && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <div className="text-xs text-gray-600 space-y-1">
                            {deal.sizes?.length > 0 && (
                              <div className="flex items-center gap-1">
                                <span className="font-medium">Sizes:</span>
                                <span>{deal.sizes.slice(0, 3).join(', ')}</span>
                                {deal.sizes.length > 3 && <span>+{deal.sizes.length - 3} more</span>}
                              </div>
                            )}
                            {deal.colors?.length > 0 && (
                              <div className="flex items-center gap-1">
                                <span className="font-medium">Colors:</span>
                                <span>{deal.colors.slice(0, 3).join(', ')}</span>
                                {deal.colors.length > 3 && <span>+{deal.colors.length - 3} more</span>}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Add to Cart Button */}
                      <button 
                        onClick={() => handleAddToCart(deal)}
                        className="w-full bg-gradient-to-r from-amber-900 to-amber-800 text-white py-3 px-4 rounded-lg hover:from-amber-800 hover:to-amber-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More */}
            {visibleDeals < deals.length && (
              <div className="text-center mt-16">
                <button 
                  onClick={loadMoreDeals}
                  className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-sm border border-gray-200 hover:shadow-md"
                >
                  Load More Deals ({deals.length - visibleDeals} remaining)
                </button>
              </div>
            )}
          </>
        ) : (
          /* No deals message */
          <div className="text-center py-20">
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 max-w-md mx-auto">
              <div className="text-gray-400 mb-6">
                <Tag className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No deals available</h3>
              <p className="text-gray-500 mb-6">
                {error 
                  ? 'Unable to load deals. Please try again later.' 
                  : 'Check back soon for amazing deals and offers!'
                }
              </p>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Refresh Page
                </button>
                <Link href="/">
                  <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}