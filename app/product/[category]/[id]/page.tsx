// app/product/[category]/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { useUser } from "@/app/context/UserContext";
import ProductTabs from "@/components/ProductTabs";
import LoginPopup from "@/components/login-popup";
import { Product } from "@/types";
import { Heart, Star, ShoppingCart } from "lucide-react";

export default function ProductDetailPage() {
  const { category, id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isAuthenticated, user } = useUser();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [qty, setQty] = useState<number>(1);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/products/${id}`);
        
        if (!response.ok) {
          throw new Error(`Product not found: ${response.status}`);
        }

        const productData = await response.json();
        
        // Verify the product belongs to the correct category
        if (productData.category !== category) {
          throw new Error('Product category mismatch');
        }
        
        setProduct(productData);
        setSelectedImage(productData.images?.[0] || productData.image || "");
        setSelectedSize(productData.sizes?.[0] || "");
        setSelectedColor(productData.colors?.[0] || "");
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (id && category) {
      fetchProduct();
    }
  }, [id, category]);

  const handleAddToCart = async () => {
    if (!product) return;
    
    if (!isAuthenticated) {
      setShowLoginPopup(true);
      return;
    }

    try {
      setActionLoading(true);
      
      // Add items based on quantity
      for (let i = 0; i < qty; i++) {
        await addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectedSize,
          color: selectedColor,
        });
      }
      
      // Show success message
      const message = `Added ${qty} item${qty > 1 ? 's' : ''} to cart!`;
      // You can replace this with a toast notification
      alert(message);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setActionLoading(false);
    }
  };

  const handleWishlistToggle = async () => {
    if (!product) return;
    
    if (!isAuthenticated) {
      setShowLoginPopup(true);
      return;
    }

    try {
      setActionLoading(true);
      
      if (isInWishlist(product.id)) {
        await removeFromWishlist(product.id);
      } else {
        await addToWishlist(product);
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="text-center py-20">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-red-600 mb-4">{error || "The requested product could not be found."}</p>
          <button 
            onClick={() => window.history.back()} 
            className="bg-amber-900 text-white px-6 py-2 rounded hover:bg-amber-800"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="capitalize">{category}</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-amber-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-full w-full mx-auto px-4 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {/* LEFT: Product Images */}
        <div>
          <div
            className="relative w-full rounded overflow-hidden bg-gray-100 mb-4"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/api/placeholder/500/500';
              }}
            />
            
            {/* Wishlist Button */}
            <button
              onClick={handleWishlistToggle}
              disabled={actionLoading}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isAuthenticated && isInWishlist(product.id) 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:text-red-500'
              } shadow-md transition-colors disabled:opacity-50`}
            >
              <Heart 
                className={`h-5 w-5 ${
                  isAuthenticated && isInWishlist(product.id) ? 'fill-current' : ''
                }`} 
              />
            </button>

            {/* Authentication indicator */}
            {!isAuthenticated && (
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 text-white text-center py-2 px-4 rounded-md text-sm">
                  <span>Login to save to wishlist & add to cart</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {[product.image, ...product.images].filter(Boolean).map((img, i) => (
              <div
                key={i}
                className={`relative flex-shrink-0 w-20 h-20 cursor-pointer border rounded ${
                  selectedImage === img ? "border-amber-800" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i}`}
                  fill
                  className="object-cover rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/api/placeholder/80/80';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-semibold mb-1">{product.name}</h1>
          <p className="text-sm text-amber-900 font-medium mb-3">By Swarattan</p>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
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
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="line-through text-gray-500 text-base">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-sm text-green-600 font-semibold">
                  (
                  {Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100
                  )}
                  % OFF)
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-gray-600 mb-3">
            Inclusive of all taxes. Shipping calculated at checkout.
          </p>

          {product.description && (
            <p className="text-sm text-gray-700 mb-4">{product.description}</p>
          )}

          <div className="mb-4 text-orange-600 font-semibold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
            Hurry Up! Last Few Items in stock
          </div>

          {/* Authentication Status */}
          {isAuthenticated && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-700">
                ✓ Logged in as {user?.name} - You can add to cart and wishlist
              </p>
            </div>
          )}

          {!isAuthenticated && (
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-700">
                ⚠ Please login to add items to cart and wishlist
              </p>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size: <span className="font-semibold">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 text-sm border rounded ${
                      selectedSize === size
                        ? 'border-amber-900 bg-amber-900 text-white'
                        : 'border-gray-300 hover:border-amber-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color: <span className="font-semibold">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 text-sm border rounded ${
                      selectedColor === color
                        ? 'border-amber-900 bg-amber-900 text-white'
                        : 'border-gray-300 hover:border-amber-900'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 w-full">
            <div className="flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-2">Qty:</label>
              <input
                type="number"
                min="1"
                max="10"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Math.min(10, +e.target.value)))}
                className="w-20 px-3 py-2 border rounded-md text-center"
              />
            </div>
            <button
              onClick={handleAddToCart}
              disabled={actionLoading}
              className="bg-amber-900 text-white px-6 py-3 rounded-md hover:bg-amber-800 w-full sm:w-auto transition-colors font-medium disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {actionLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <ShoppingCart className="h-4 w-4" />
              )}
              <span>
                {actionLoading ? 'Adding...' : 'ADD TO CART'}
              </span>
            </button>
          </div>

          <ProductTabs product={product} />
        </div>
      </div>

      <Footer />

      {/* Login Popup */}
      <LoginPopup 
        isOpen={showLoginPopup} 
        onClose={() => setShowLoginPopup(false)} 
      />
    </div>
  );
}
