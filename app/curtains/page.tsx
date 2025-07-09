"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";
import { Product } from "@/types";

export default function CurtainsPage() {
  const productImages = [
    "/images/CurtainSection/cr1/c1.png",
    "/images/CurtainSection/cr2/c1.png",
    "/images/CurtainSection/cr3/c1.png",
    "/images/CurtainSection/cr4/c1.png",
    "/images/CurtainSection/cr5/c1.png",
    "/images/CurtainSection/cr6/c1.png",
    "/images/CurtainSection/cr7/c1.png",
    "/images/CurtainSection/cr8/c1.png",
    "/images/CurtainSection/cr9/c1.png",
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const generatedProducts: Product[] = [
      {
        id: 40,
        name: "Elegant Floral Print Room Darkening Curtains Set of 2 DS427B",
        price: 1799,
        originalPrice: 2299,
        rating: 4.5,
        reviews: 110,
        image: productImages[0],
        images: [],
        colors: ["Grey", "Charcoal"],
        sizes: ["4x5 ft", "5x7 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
      },
      {
        id: 41,
        name: "Blooming Vines Floral Midnight Blue Heavy Satin Blackout Curtains Set Of 2 - (DS428A)",
        price: 1299,
        originalPrice: 1599,
        rating: 4.2,
        reviews: 85,
        image: productImages[1],
        images: [],
        colors: ["White", "Pink"],
        sizes: ["4x5 ft", "5x7 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
      },
      {
        id: 42,
        name: "Summer Blush Floral Chestnut Pink Sheer Curtain Set of 2 - DS607",
        price: 1599,
        originalPrice: 1999,
        rating: 4.6,
        reviews: 95,
        image: productImages[2],
        images: [],
        colors: ["Brown"],
        sizes: ["5x7 ft", "7x9 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
      },
      {
        id: 43,
        name: "Morning Dew Floral Glossy Grape Purple Sheer Curtain Set of 2 - DS605",
        price: 1899,
        originalPrice: 2499,
        rating: 4.8,
        reviews: 130,
        image: productImages[3],
        images: [],
        colors: ["Royal Blue"],
        sizes: ["5x7 ft", "7x9 ft", "9x12 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
      },
      {
        id: 44,
        name: "Elegant Floral Print Room Darkening Curtains Set of 2 DS357A",
        price: 1499,
        originalPrice: 1799,
        rating: 4.3,
        reviews: 70,
        image: productImages[4],
        images: [],
        colors: ["Beige"],
        sizes: ["4x5 ft", "5x7 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
      },
      {
        id: 45,
        name: "Diverse Parade Geometric Slate Grey Heavy Satin Blackout Curtains Set Of 2 - (DS523D)",
        price: 2499,
        originalPrice: 2999,
        rating: 4.9,
        reviews: 160,
        image: productImages[5],
        images: [],
        colors: ["Dark Green"],
        sizes: ["5x7 ft", "7x9 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
      },
      {
        id: 46,
        name: "Elegant Plain Print Sheer Semi Transparent Curtain - Set of 2 -PSHEERWHT",
        price: 1199,
        originalPrice: 1499,
        rating: 4.1,
        reviews: 55,
        image: productImages[6],
        images: [],
        colors: ["Pink"],
        sizes: ["4x5 ft", "5x7 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
      },
      {
        id: 47,
        name: "Bloomscape Floral Vanilla Beige Heavy Satin Blackout Curtain Set of 2 - DS614",
        price: 1399,
        originalPrice: 1799,
        rating: 4.4,
        reviews: 95,
        image: productImages[7],
        images: [],
        colors: ["Grey"],
        sizes: ["5x7 ft", "7x9 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
      },
      {
        id: 48,
        name: "Elegant Ombre Print Room Darkening Curtain - Set of 2 - DSFRDM1",
        price: 1699,
        originalPrice: 2099,
        rating: 4.7,
        reviews: 120,
        image: productImages[8],
        images: [],
        colors: ["Gold"],
        sizes: ["5x7 ft", "7x9 ft", "9x12 ft"],
        description: "",
        returnPolicy: "",
        careInstructions: "",
        manufactureDetail: "",
        category: "curtains",
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
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />  

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-amber-900 font-medium">Curtains</span>
          </nav>
        </div>
      </div>

      {/* Background Image with Overlay and Text */}
      <div className="relative h-[420px] flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src="/images/CurtainSection/hero1.png"
              alt="page"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20  text-white px-4">
            <h1 className="text-4xl font-light bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2">Decor Curtains Collection</h1>
            <p className="text-gray-100 ">
              <span className="text-xl">Complete your décor with curtains that blend beauty and function.
              </span>  <br /> <span className="text-lg">Sheer, blackout, and textured styles for every room.</span>  <br /> Add a touch of luxury and comfort to your space.
            </p>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl md:mx-10 pt-10 px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
        

          {/* Product Grid */}
          <div className="flex-1">
            {/* Product Cards */}
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.category}/${product.id}`}
                >
                  <div className="group border-2 border-gray-200 cursor-pointerr">
                    <div className="relative bg-gray-100  overflow-hidden mb-4 aspect-square">
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
