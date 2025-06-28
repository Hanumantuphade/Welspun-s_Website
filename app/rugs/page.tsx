import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Star, Filter, Grid, List } from "lucide-react";
import { Product } from "@/types";

export default function RugsPage() {
  const generatedProducts: Product[] = [
    {
      id: 1,
      name: "Geometric Pattern Rug",
      price: 1499,
      originalPrice: 1999,
      rating: 4.2,
      reviews: 80,
      image: "/images/rugsSection/R1.png",
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
      id: 2,
      name: "Floral Design Rug",
      price: 1699,
      originalPrice: 2299,
      rating: 4.5,
      reviews: 95,
      image: "/images/rugsSection/R2.png",
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
      id: 3,
      name: "Traditional Carpet Rug",
      price: 1899,
      originalPrice: 2499,
      rating: 4.4,
      reviews: 110,
      image: "/images/rugsSection/R3.png",
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
      id: 4,
      name: "Modern Abstract Rug",
      price: 1799,
      originalPrice: 2399,
      rating: 4.3,
      reviews: 70,
      image: "/images/rugsSection/R4.png",
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
      id: 5,
      name: "Classic Persian Rug",
      price: 2499,
      originalPrice: 3299,
      rating: 4.7,
      reviews: 150,
      image: "/images/rugsSection/R5.png",
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
      id: 6,
      name: "Minimalist Grey Rug",
      price: 1399,
      originalPrice: 1899,
      rating: 4.1,
      reviews: 65,
      image: "/images/rugsSection/R6.png",
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
      id: 7,
      name: "Striped Area Rug",
      price: 1599,
      originalPrice: 2099,
      rating: 4.3,
      reviews: 75,
      image: "/images/rugsSection/R7.png",
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
      id: 8,
      name: "Bold Abstract Rug",
      price: 1899,
      originalPrice: 2599,
      rating: 4.5,
      reviews: 85,
      image: "/images/rugsSection/R8.png",
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
      id: 9,
      name: "Elegant Floral Rug",
      price: 1699,
      originalPrice: 2299,
      rating: 4.4,
      reviews: 95,
      image: "/images/rugsSection/R9.png",
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
      id: 10,
      name: "Vintage Persian Rug",
      price: 2499,
      originalPrice: 3299,
      rating: 4.8,
      reviews: 160,
      image: "/images/rugsSection/R10.png",
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
      id: 11,
      name: "Contemporary Rug",
      price: 1799,
      originalPrice: 2399,
      rating: 4.2,
      reviews: 78,
      image: "/images/rugsSection/R11.png",
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
      id: 12,
      name: "Luxury Designer Rug",
      price: 2999,
      originalPrice: 3999,
      rating: 4.9,
      reviews: 180,
      image: "/images/rugsSection/R12.png",
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
            <span className="text-amber-900 font-medium">Rugs</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Rugs Collection</h1>
          <p className="text-gray-600">Beautiful rugs to transform your living spaces</p>
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
                  {["Under ₹1,000", "₹1,000 - ₹2,000", "₹2,000 - ₹5,000", "Above ₹5,000"].map((range) => (
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
                  {["Small (3x5)", "Medium (5x7)", "Large (8x10)", "Extra Large (9x12)"].map((size) => (
                    <label key={size} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{size}</span>
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
              <p className="text-gray-600">{generatedProducts.length} products found</p>
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
              {generatedProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.category}/${product.id}`}>
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
