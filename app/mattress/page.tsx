"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";
import { Product } from "@/types";

export default function MattressPage() {
  const productImages = [
    "/images/MattressSection/M1.png",
    "/images/MattressSection/M2.png",
    "/images/MattressSection/M3.png",
    "/images/MattressSection/M4.png",
    "/images/MattressSection/M5.png",
    "/images/MattressSection/M6.png",
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const generatedProducts: Product[] = [
      {
        id: 1,
        name: "Comfort Plus Orthopedic Mattress",
        price: 9999,
        originalPrice: 12999,
        rating: 4.5,
        reviews: 120,
        image: productImages[0],
        images: [],
        colors: ["White"],
        sizes: ["Single", "Double", "Queen", "King"],

        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "mattress",
      },
      {
        id: 2,
        name: "Luxury Memory Foam Mattress",
        price: 14999,
        originalPrice: 18999,
        rating: 4.8,
        reviews: 210,
        image: productImages[1],
        images: [],
        colors: ["White"],
        sizes: ["Single", "Double", "Queen", "King"],

        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "mattress",
      },
      {
        id: 3,
        name: "Premium Spring Mattress",
        price: 11999,
        originalPrice: 15999,
        rating: 4.2,
        reviews: 95,
        image: productImages[2],
        images: [],
        colors: ["Beige"],
        sizes: ["Single", "Double", "Queen", "King"],

        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "mattress",
      },
      {
        id: 4,
        name: "Ultra Plush Latex Mattress",
        price: 19999,
        originalPrice: 24999,
        rating: 4.6,
        reviews: 180,
        image: productImages[3],
        images: [],
        colors: ["White"],
        sizes: ["Single", "Double", "Queen", "King"],

        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "mattress",
      },
      {
        id: 5,
        name: "Dual Comfort Reversible Mattress",
        price: 8999,
        originalPrice: 12999,
        rating: 4.4,
        reviews: 150,
        image: productImages[4],
        images: [],
        colors: ["White"],
        sizes: ["Single", "Double", "Queen", "King"],

        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "mattress",
      },
      {
        id: 6,
        name: "Cool Gel Memory Foam Mattress",
        price: 17999,
        originalPrice: 21999,
        rating: 4.9,
        reviews: 250,
        image: productImages[5],
        images: [],
        colors: ["White"],
        sizes: ["Single", "Double", "Queen", "King"],

        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "mattress",
      },
    ];

    setProducts(generatedProducts);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-amber-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-amber-900 font-medium">Mattress</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            Mattress Collection
          </h1>
          <p className="text-gray-600">
            Premium mattresses for the perfect night's sleep
          </p>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
                    "Under ₹10,000",
                    "₹10,000 - ₹20,000",
                    "₹20,000 - ₹30,000",
                    "Above ₹30,000",
                  ].map((range) => (
                    <label key={range} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Size</h4>
                <div className="space-y-2">
                  {["Single", "Double", "Queen", "King"].map((size) => (
                    <label key={size} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Firmness */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Firmness</h4>
                <div className="space-y-2">
                  {["Soft", "Medium", "Firm", "Extra Firm"].map((firmness) => (
                    <label key={firmness} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{firmness}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{products.length} products found</p>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.category}/${product.id}`}
                >
                  <div className="group cursor-pointer">
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                          Free Delivery
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full bg-amber-900 text-white py-2 rounded-md hover:bg-amber-800 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-900 group-hover:text-amber-900 transition-colors">
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
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      </div>

                      <div className="text-sm text-gray-600">
                        Available in: {product.sizes.join(", ")}
                      </div>
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
