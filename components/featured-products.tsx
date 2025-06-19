import Image from "next/image"
import { Star, Heart } from "lucide-react"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Cotton Towel Set",
      price: 1999,
      originalPrice: 2999,
      rating: 4.5,
      reviews: 128,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Luxury Bed Sheet Set",
      price: 2499,
      originalPrice: 3499,
      rating: 4.7,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New Arrival",
    },
    {
      id: 3,
      name: "Decorative Cushion Cover",
      price: 599,
      originalPrice: 899,
      rating: 4.3,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Blackout Curtains",
      price: 1799,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 94,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Popular",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium home furnishing products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                {/* Product Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-amber-900 text-white text-xs px-2 py-1 rounded">{product.badge}</span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>

                {/* Product Image */}
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Quick Add Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-amber-900 text-white py-2 rounded-md hover:bg-amber-800 transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 group-hover:text-amber-900 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
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

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900">₹{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-sm text-green-600 font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-amber-900 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
