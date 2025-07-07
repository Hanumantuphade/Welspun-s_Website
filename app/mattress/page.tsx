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
    "/images/MattressSection/mat1/m1.png",
    "/images/MattressSection/mat2/m1.png",
    "/images/MattressSection/mat3/m1.png",
    "/images/MattressSection/mat4/m1.png",
    "/images/MattressSection/mat5/m1.png",
    "/images/MattressSection/mat6/m1.png",
  ];

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  useEffect(() => {
    const generatedProducts: Product[] = [
      {
        id: 22,
        name: "Luxury Mattress (8 inch height)",
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
        id: 23,
        name: "Mattress (6 inch height)",
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
        id: 24,
        name: "Yours'n'Mine Medium-Firm Mattress (6 inch height)",
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
        id: 25,
        name: "Firm & Fab Mattress (6 inch height)",
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
        id: 26,
        name: "Solid White Polyester Double Mattress Protector - Softshield",
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
        id: 27,
        name: "Yours'N Mine Soft-Medium Luxury Mattress (8 inch height)",
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
    setFilteredProducts(generatedProducts); // initially show all
  }, []);

  // Handle Price Range change
  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range]
    );
  };

  // Handle Size change
  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  // Apply filters
  useEffect(() => {
    let filtered = products;

    // Filter by price ranges
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) =>
        selectedPriceRanges.some((range) => {
          const price = product.price;
          if (range === "Under ₹10,000") return price < 10000;
          if (range === "₹10,000 - ₹20,000")
            return price >= 10000 && price <= 20000;
          if (range === "₹20,000 - ₹30,000")
            return price >= 20000 && price <= 30000;
          if (range === "Above ₹30,000") return price > 30000;
        })
      );
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => selectedSizes.includes(size))
      );
    }

    setFilteredProducts(filtered);
  }, [selectedPriceRanges, selectedSizes, products]);

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

      {/* Background Image with Overlay and Text */}
      <div className="relative h-[400px] flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src="/images/MattressSection/hero.png"
              alt="page"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20  text-white px-4">
            <h1 className="text-4xl font-light bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2">Comfort Mattress Collection</h1>
            <p className="text-gray-100 ">
              <span className="text-xl">Upgrade your sleep with mattresses designed for ultimate comfort.
              </span>  <br /> <span className="text-lg">Balanced support and plush cushioning for peaceful nights.</span>  <br /> Experience the difference of quality sleep every day.
            </p>
          </div>
        </div>

      <div className="max-w-7xl pt-10 md:mx-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
         
          {/* Products Grid */}
          <div className="flex-1">
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.category}/${product.id}`}
                >
                  <div className="group border-2 border-gray-200 cursor-pointer">
                    <div className="relative bg-gray-100  overflow-hidden mb-4">
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
                        {/* <button className="w-full bg-amber-900 text-white py-2 rounded-md hover:bg-amber-800 transition-colors">
                          Add to Cart
                        </button> */}
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

                      {/* <div className="text-sm text-gray-600">
                        Available in: {product.sizes.join(", ")}
                      </div> */}
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
