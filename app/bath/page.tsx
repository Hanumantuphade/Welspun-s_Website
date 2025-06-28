"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";
import { Product } from "@/types";

export default function BathPage() {
  const productImages = [
    "/images/bathSection/BT1.png",
    "/images/bathSection/BT2.png",
    "/images/bathSection/BT3.png",
    "/images/bathSection/BT4.png",
    "/images/bathSection/BT5.png",
    "/images/bathSection/BT6.png",
    "/images/bathSection/BT7.png",
    "/images/bathSection/B8.jpeg",
    "/images/bathSection/BT8.jpg",
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const generatedProducts: Product[] = [
      {
        id: 13,
        name: "Dark Green 100% Cotton Towel",
        price: 499,
        originalPrice: 699,
        rating: 4.5,
        reviews: 120,
        image: productImages[0],
        images: [],
        colors: ["Green", "White"],
        sizes: ["Standard"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "bath",
      },
      {
        id: 2,
        name: "Light Blue Bamboo Bath Towel",
        price: 899,
        originalPrice: 1199,
        rating: 4.8,
        reviews: 210,
        image: productImages[1],
        images: [],
        colors: ["Blue"],
        sizes: ["Large"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "bath",
      },
      {
        id: 3,
        name: "Luxury Cotton Bath Mat",
        price: 799,
        originalPrice: 999,
        rating: 4.2,
        reviews: 95,
        image: productImages[2],
        images: [],
        colors: ["Beige", "White"],
        sizes: ["Medium"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "bath",
      },
      {
        id: 4,
        name: "Elegant White Shower Curtain",
        price: 1199,
        originalPrice: 1499,
        rating: 4.0,
        reviews: 75,
        image: productImages[3],
        images: [],
        colors: ["White"],
        sizes: ["Standard"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "bath",
      },
      {
        id: 5,
        name: "Beige Cotton Bath Robe",
        price: 1499,
        originalPrice: 1799,
        rating: 4.6,
        reviews: 180,
        image: productImages[4],
        images: [],
        colors: ["Beige"],
        sizes: ["Large"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "bath",
      },
      {
        id: 6,
        name: "Luxury Linen Towel Set",
        price: 1799,
        originalPrice: 2199,
        rating: 4.9,
        reviews: 250,
        image: productImages[5],
        images: [],
        colors: ["Gray"],
        sizes: ["Standard"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "bath",
      },
      {
        id: 7,
        name: "Princess Lilac Bath Towel",
        price: 599,
        originalPrice: 799,
        rating: 3.8,
        reviews: 60,
        image: productImages[6],
        images: [],
        colors: ["Lilac"],
        sizes: ["Standard"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "bath",
      },
      {
        id: 8,
        name: "Dark Grey Quick Dry Towel",
        price: 999,
        originalPrice: 1299,
        rating: 4.7,
        reviews: 220,
        image: productImages[7],
        images: [],
        colors: ["Dark Grey"],
        sizes: ["Large"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "bath",
      },
    ];
    setProducts(generatedProducts);
  }, []);

  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600">Loading products...</div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-amber-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-amber-900 font-medium">Bath</span>
          </nav>
        </div>
      </div>

      {/* Page Heading */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            Bath Collection
          </h1>
          <p className="text-gray-600">
            Luxury bath essentials for your daily comfort
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
                  {["Under ₹500", "₹500 - ₹1000", "₹1000 - ₹1500", "Above ₹1500"].map(range => (
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
                  {["Towels", "Bath Mats", "Shower Curtains", "Bath Robes", "Accessories"].map(type => (
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
                  {["Cotton", "Bamboo", "Microfiber", "Linen"].map(material => (
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
