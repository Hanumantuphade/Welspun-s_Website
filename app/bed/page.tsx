"use client";

import Link from "next/link";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";

export default function BedPage() {
  const productImages = [
    "/images/bedSection/bed1/b1.png",
    "/images/bedSection/bed2/b1.png",
    "/images/bedSection/bed3/b1.png",
    "/images/bedSection/bed4/b1.png",
    "/images/bedSection/bed5/b1.png",
    "/images/bedSection/bed6/b1.png",
    "/images/bedSection/bed7/b1.png",
    "/images/bedSection/bed8/b1.png",
    "/images/bedSection/bed9/b1.png",
    "/images/bedSection/bed10/b1.png",
    "/images/bedSection/bed11/b1.png",
    "/images/bedSection/bed12/b1.png",
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const generatedProducts = productImages.map((img, index) => ({
      id: index + 1,
      name: `Sample Bed Product ${index + 1}`,
      price: 3799,
      originalPrice: 4799,
      rating: 4.8,
      reviews: 240,
      image: img,
      images: [],
      colors: ["White"],
      sizes: ["King"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "bed",
    }));
    setProducts(generatedProducts);
  }, []);

  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600">Loading products...</div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Promo Bar */}
      <div className="bg-amber-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-amber-900 font-medium">Bed</span>
          </nav>
        </div>
      </div>

      {/* Page Heading */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
            Bed Collection
          </h1>
          <p className="text-gray-600">
            Premium bedding essentials for your comfort
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {[
                    "Under ₹1000",
                    "₹1000 - ₹2000",
                    "₹2000 - ₹3000",
                    "Above ₹3000",
                  ].map((range) => (
                    <label key={range} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Product Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Product Type</h4>
                <div className="space-y-2">
                  {[
                    "Bedsheets",
                    "Blankets",
                    "Duvet Covers",
                    "Pillows",
                    "Mattress Protectors",
                  ].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Material</h4>
                <div className="space-y-2">
                  {["Cotton", "Satin", "Silk", "Linen"].map((material) => (
                    <label key={material} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <p className="text-gray-600">{products.length} products found</p>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-auto">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
                <div className="flex border border-gray-300 rounded-md">
                  <button className="p-2 bg-amber-900 text-white">
                    <Grid className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600">
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.category}/${product.id}`}
                >
                  <div className="group cursor-pointer">
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 group-hover:text-amber-900 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={`${product.id}-star-${i}`}
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
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
