import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Star, Filter, Grid, List } from "lucide-react"

export default function CurtainsPage() {


  const productImages = [
    "/images/CurtainSection/c1.jpeg",
    "/images/CurtainSection/c2.jpeg",
    "/images/CurtainSection/c3.jpeg",
    "/images/CurtainSection/c4.jpeg",
    "/images/CurtainSection/c5.jpeg",
    "/images/CurtainSection/c6.jpeg",
    "/images/CurtainSection/c7.jpeg",
    "/images/CurtainSection/c8.jpeg",
    "/images/CurtainSection/c9.jpeg",
    "/images/CurtainSection/c10.jpeg",

  ]
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Premium Curtain Set ${i + 1}`,
    price: 1599 + i * 250,
    originalPrice: 2299 + i * 350,
    rating: 4.2 + Math.random() * 0.8,
    reviews: Math.floor(Math.random() * 100) + 35,
    image: productImages[i], // Set unique image from array
    sizes: ["Small (4x5)", "Medium (5x7)", "Large (7x9)", "Extra Large (9x12)"],
    types: ["Blackout", "Sheer", "Semi-Sheer", "Thermal"],
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
            <span className="text-amber-900 font-medium">Curtains</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Curtains Collection</h1>
          <p className="text-gray-600">Elegant curtains to enhance your home decor</p>
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
                    <span className="text-sm">Under ₹1,500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">₹1,500 - ₹3,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">₹3,000 - ₹5,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Above ₹5,000</span>
                  </label>
                </div>
              </div>

              {/* Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Type</h4>
                <div className="space-y-2">
                  {["Blackout", "Sheer", "Semi-Sheer", "Thermal", "Decorative"].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Room */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Room</h4>
                <div className="space-y-2">
                  {["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office"].map((room) => (
                    <label key={room} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{room}</span>
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

           
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
