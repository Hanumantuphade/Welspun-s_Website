// app/wishlist/page.tsx
"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Search, Heart, Star, Trash2 } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = wishlistItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes?.[0] || '',
      color: product.colors?.[0] || '',
    });
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-amber-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-amber-900 font-medium">My Wishlist</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-light text-amber-900">
            My Wishlist ({wishlistItems.length})
          </h1>
          {wishlistItems.length > 0 && (
            <Heart className="h-8 w-8 text-red-500 fill-current" />
          )}
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search items in wishlist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
          />
        </div>

        {/* Wishlist Items */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <Link href={`/product/${item.category}/${item.id}`}>
                    <div className="aspect-square relative bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/api/placeholder/300/300';
                        }}
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
                
                <div className="p-4">
                  <Link href={`/product/${item.category}/${item.id}`}>
                    <h3 className="font-medium text-gray-900 hover:text-amber-900 transition-colors line-clamp-2 mb-2">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({item.reviews})</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-semibold text-gray-900">
                      ₹{item.price.toLocaleString()}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-amber-900 text-white py-2 px-3 text-sm rounded hover:bg-amber-800 transition-colors"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="px-3 py-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-amber-900 font-medium">
              {searchTerm ? 'No matching items found!' : 'No products in wishlist!'}
            </p>
            <p className="text-gray-600 mt-2">
              {searchTerm 
                ? 'Try adjusting your search terms.'
                : 'Start adding items to your wishlist by clicking the heart icon on products.'
              }
            </p>
            <div className="flex gap-4 justify-center mt-6">
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors font-medium"
                >
                  Clear Search
                </button>
              )}
              <Link href="/">
                <button className="bg-amber-900 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors font-medium">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
