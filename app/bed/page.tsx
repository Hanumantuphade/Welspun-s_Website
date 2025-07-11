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
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Bed</span>
          </nav>
        </div>
      </div>

      {/* Background Image with Overlay and Text */}
      <div className="relative h-[440px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/images/bedSection/hero.png"
            alt="page"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20  text-white px-4">
          <h1 className="text-4xl font-light bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2">
            Luxury Bed Collection
          </h1>
          <p className="text-gray-100 ">
            <span className="text-xl">
              Elevate your bedroom with our premium bedding range.
            </span>{" "}
            <br />{" "}
            <span className="text-lg">
              Experience ultra-soft fabrics and timeless designs crafted for
              your comfort.
            </span>{" "}
            <br /> Sleep beautifully and wake refreshed every day.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-screen-xl mx-auto pt-10 lg:pt-2 xl:pt-2 px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Grid */}
          <div className="flex-1">
            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 xl:gap-10 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.category}/${product.id}`}
                >
                  <div className="group border-2 border-gray-200 cursor-pointer">
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
