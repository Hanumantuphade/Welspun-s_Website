import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Star, Filter, Grid, List } from "lucide-react";
import { Product } from "@/types";

export default function RugsPage() {
  const generatedProducts: Product[] = [
    {
      id: 28,
      name: "Beige Multilayer Texture Woven Carpet - Meraki",
      price: 1499,
      originalPrice: 1999,
      rating: 4.2,
      reviews: 80,
      image: "/images/rugsSection/rg1/r1.png",
      images: [],
      colors: ["Beige", "Brown"],
      sizes: ["Small (3x5)", "Medium (5x7)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 29,
      name: "Blue Polyester Area Rug - Blissful",
      price: 1699,
      originalPrice: 2299,
      rating: 4.5,
      reviews: 95,
      image: "/images/rugsSection/rg2/r1.png",
      images: [],
      colors: ["Red", "Beige"],
      sizes: ["Medium (5x7)", "Large (8x10)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 30,
      name: "Gold Multilayer Texture Soft Woven Carpet",
      price: 1899,
      originalPrice: 2499,
      rating: 4.4,
      reviews: 110,
      image: "/images/rugsSection/rg3/r1.png",
      images: [],
      colors: ["Maroon", "Gold"],
      sizes: ["Large (8x10)", "Extra Large (9x12)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 31,
      name: "D Brown Multilayer Texture Woven Carpet - Meraki ",
      price: 1799,
      originalPrice: 2399,
      rating: 4.3,
      reviews: 70,
      image: "/images/rugsSection/rg4/r1.png",
      images: [],
      colors: ["Grey", "Blue"],
      sizes: ["Small (3x5)", "Medium (5x7)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 32,
      name: "Rose Plush Feel Woven Carpet - Nesta ",
      price: 2499,
      originalPrice: 3299,
      rating: 4.7,
      reviews: 150,
      image: "/images/rugsSection/rg5/r1.png",
      images: [],
      colors: ["Red", "Navy"],
      sizes: ["Large (8x10)", "Extra Large (9x12)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 33,
      name: "Plush Feel Red Polypropylene Runner - Idika",
      price: 1399,
      originalPrice: 1899,
      rating: 4.1,
      reviews: 65,
      image: "/images/rugsSection/rg6/r1.png",
      images: [],
      colors: ["Grey"],
      sizes: ["Small (3x5)", "Medium (5x7)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 34,
      name: "Unwinders Nylon Runner-Dark Brown",
      price: 1599,
      originalPrice: 2099,
      rating: 4.3,
      reviews: 75,
      image: "/images/rugsSection/rg7/r1.png",
      images: [],
      colors: ["Brown", "Beige"],
      sizes: ["Medium (5x7)", "Large (8x10)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 35,
      name: "Luxury Cushlon Drylon Runner - Teal",
      price: 1899,
      originalPrice: 2599,
      rating: 4.5,
      reviews: 85,
      image: "/images/rugsSection/rg8/r1.png",
      images: [],
      colors: ["Black", "White"],
      sizes: ["Large (8x10)", "Extra Large (9x12)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 36,
      name: "Unwinders Nylon Runner-Beige",
      price: 1699,
      originalPrice: 2299,
      rating: 4.4,
      reviews: 95,
      image: "/images/rugsSection/rg9/r1.png",
      images: [],
      colors: ["Cream", "Pink"],
      sizes: ["Medium (5x7)", "Large (8x10)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 37,
      name: "Cream Polyester Runner - Blissful",
      price: 2499,
      originalPrice: 3299,
      rating: 4.8,
      reviews: 160,
      image: "/images/rugsSection/rg10/r1.png",
      images: [],
      colors: ["Red", "Beige"],
      sizes: ["Large (8x10)", "Extra Large (9x12)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 38,
      name: "Luxury Cushlon Drylon Foot Mats Large - Red",
      price: 1799,
      originalPrice: 2399,
      rating: 4.2,
      reviews: 78,
      image: "/images/rugsSection/rg11/r1.png",
      images: [],
      colors: ["Grey", "Blue"],
      sizes: ["Small (3x5)", "Medium (5x7)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
    {
      id: 39,
      name: "Unwinders Nylon Foot Door Small-Dark Red",
      price: 2999,
      originalPrice: 3999,
      rating: 4.9,
      reviews: 180,
      image: "/images/rugsSection/rg12/r1.png",
      images: [],
      colors: ["Beige", "Gold"],
      sizes: ["Large (8x10)", "Extra Large (9x12)"],
      description: "",
      returnPolicy: "",
      careInstructions: "",
      manufactureDetail: "",
      category: "rugs",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl md:mx-10 px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Rugs</span>
          </nav>
        </div>
      </div>

      {/* Background Image with Overlay and Text */}
      <div className="relative h-[420px] flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src="/images/rugsSection/hero.png"
              alt="page"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20  text-white px-4">
            <h1 className="text-4xl font-light bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent mb-2">Premium Rugs Collection</h1>
            <p className="text-gray-100 ">
              <span className="text-xl">Discover rugs crafted for comfort and lasting beauty.
              </span>  <br /> <span className="text-lg">BSoft underfoot with designs that elevate any space.</span>  <br /> Bring warmth, texture, and elegance to your home.
            </p>
          </div>
        </div>

      {/* Filters and Products */}
      <div className="w-full max-w-full mx-auto pt-10 px-2 md:px-12 lg:px-16 xl:px-16 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          

          {/* Products Grid */}
          <div className="flex-1">
           

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
              {generatedProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.category}/${product.id}`}>
                  <div className="group border-2 border-gray-200 cursor-pointer">
                    <div className="relative bg-gray-200 overflow-hidden mb-4">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
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
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-900">₹{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
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
