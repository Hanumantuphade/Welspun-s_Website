"use client";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function BedPage() {
  const { addToCart } = useCart();

  const productImages = [
    "/images/bedSection/bed1.jpeg",
    "/images/bedSection/bed2.jpeg",
    "/images/bedSection/bed3.jpeg",
    "/images/bedSection/bed4.jpeg",
    "/images/bedSection/bed5.jpeg",
    "/images/bedSection/bed6.jpeg",
    "/images/bedSection/bed7.jpeg",
    "/images/bedSection/bed8.jpeg",
    "/images/bedSection/bed9.jpeg",
    "/images/bedSection/bed10.jpeg",
    "/images/bedSection/bed11.jpeg",
    "/images/bedSection/bed12.jpeg",
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const generatedProducts = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: "Premium Bed Sheet Set",
      price: 1999 + i * 200,
      originalPrice: 2999 + i * 300,
      rating: +(4 + Math.random()).toFixed(1),
      reviews: Math.floor(Math.random() * 200) + 50,
      image: productImages[i],
      colors: ["White", "Blue", "Gray"],
      sizes: ["Single", "Double", "Queen", "King"],
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
      <div className="bg-amber-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-amber-900 font-medium">Bed</span>
          </nav>
        </div>
      </div>

      {/* Page Heading */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
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
          <div className="lg:w-64">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" /> Filters
              </h3>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                {[
                  "Under ₹1000",
                  "₹1000 - ₹2000",
                  "₹2000 - ₹3000",
                  "Above ₹3000",
                ].map((range, i) => (
                  <label key={i} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{range}</span>
                  </label>
                ))}
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Size</h4>
                {["Single", "Double", "Queen", "King"].map((size) => (
                  <label key={size} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{size}</span>
                  </label>
                ))}
              </div>

              {/* Color Filter */}
              <div>
                <h4 className="font-medium mb-3">Color</h4>
                {["White", "Blue", "Gray", "Beige", "Pink"].map((color) => (
                  <label key={color} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{color}</span>
                  </label>
                ))}
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
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
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
              {products.map((product: Product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="w-full bg-amber-900 text-white py-2 rounded-md hover:bg-amber-800"
                        onClick={() =>
                          addToCart({
                            ...product,
                            size: product.sizes[0],
                            color: product.colors[0],
                            quantity: 1,
                          })
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
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

                  <div className="flex space-x-1">
                    {product.colors.map((color: string) => (
                      <div
                        key={color}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color.toLowerCase() }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            
           
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
