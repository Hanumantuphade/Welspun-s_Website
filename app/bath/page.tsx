"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types";

export default function BathPage() {
  const productImages = [
    "/images/bathSection/bath1/b1.png",
    "/images/bathSection/bath2/b1.png",
    "/images/bathSection/bath3/b1.png",
    "/images/bathSection/bath4/b1.png",
    "/images/bathSection/bath5/b1.png",
    "/images/bathSection/bath6/b1.png",
    "/images/bathSection/bath7/b1.png",
    "/images/bathSection/bath8/b1.png",
    "/images/bathSection/bath9/b1.png",
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const generatedProducts: Product[] = [
      {
        id: 13,
        name: "Spectrum Blue 100% Cotton Hand Towel",
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
        id: 14,
        name: "Camel-Light Brown 4 Piece 100% Cotton Face Towel Set",
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
        id: 15,
        name: "Gunmetal Grey - Dark Grey 100% Cotton Bath Towel",
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
        id: 16,
        name: "Grape Fruit-Red 2 Piece 100% Cotton Hand Towel Set",
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
        id: 17,
        name: "White 100% Cotton Turbie Towel",
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
        id: 18,
        name: "Supersoft Light Grey Medium Bath Robe",
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
        id: 19,
        name: "High Absorbency Grey/Ivory-Grey 100% Cotton Bath Robe",
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
        id: 20,
        name: "Poorak Luxury White Free Size Bath Robe (1 bathrobe for women, For: Women, Luxury White)",
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
      {
        id: 21,
        name: "Poorak Pink Free Size Bath Robe (1 bathrobe for women, For: Women, Pink)",
        price: 999,
        originalPrice: 1299,
        rating: 4.7,
        reviews: 220,
        image: productImages[8],
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
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      <section>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3 ">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm  text-gray-500">
              Home <span className="mx-2 text-gray-400">/</span>
              <span className="text-amber-900 font-medium">Bath</span>
            </nav>
          </div>
        </div>

        {/* Background Image with Overlay and Text */}
        <div className="relative h-[420px] flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src="/images/bathSection/hero.png"
              alt="page"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20  text-white px-4">
            <h1 className="text-4xl font-light bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2">Luxury Bath Collection</h1>
            <p className="text-gray-100 ">
              <span className="text-xl">Create a calming sanctuary in your bathroom with our premium
              collection.</span>  <br /> <span className="text-lg">From absorbent towels to cosy robes, each piece offers
              ultimate comfort.</span>  <br />  Relax, unwind, and treat yourself to spa-level
              luxury every day.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl md:mx-10 px-4 pt-10 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.category}/${product.id}`}
                  >
                    <div className="group border-2 border-gray-200 cursor-pointer">
                      <div className="relative bg-gray-100 overflow-hidden mb-4 aspect-square">
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
      </section>

      <Footer />
    </div>
  );
}
