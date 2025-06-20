import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Star, Filter, Grid, List } from "lucide-react"

export default function RugsPage() {

  const productImages = [
    "/images/rugsSection/rg1.jpeg",
    "/images/rugsSection/rg2.jpeg",
    "/images/rugsSection/rg3.jpeg",
    "/images/rugsSection/rg4.jpeg",
    "/images/rugsSection/rg5.jpeg",
    "/images/rugsSection/rg6.jpeg",
    "/images/rugsSection/rg7.jpeg",
    "/images/rugsSection/rg8.jpeg",
    "/images/rugsSection/rg9.jpeg",
    "/images/rugsSection/rg10.jpeg",
    "/images/rugsSection/rg11.jpeg",
    "/images/rugsSection/rg12.jpeg",
    "/images/rugsSection/rg13.jpeg",
    "/images/rugsSection/rg14.jpeg",
    "/images/rugsSection/rg15.jpeg",
  ]

  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Designer Rug ${i + 1}`,
    price: 1299 + i * 200,
    originalPrice: 1899 + i * 300,
    rating: 4.0 + Math.random() * 1.0,
    reviews: Math.floor(Math.random() * 120) + 25,
    image: productImages[i], // Set unique image from array
    sizes: ["Small (3x5)", "Medium (5x7)", "Large (8x10)", "Extra Large (9x12)"],
    patterns: ["Geometric", "Floral", "Abstract", "Traditional"],
  }))

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
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Under ₹1,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">₹1,000 - ₹2,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">₹2,000 - ₹5,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Above ₹5,000</span>
                  </label>
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

              {/* Pattern */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Pattern</h4>
                <div className="space-y-2">
                  {["Geometric", "Floral", "Abstract", "Traditional", "Modern"].map((pattern) => (
                    <label key={pattern} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{pattern}</span>
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
                <div key={product.id} className="group cursor-pointer">
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
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-amber-900 text-white rounded-md">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
