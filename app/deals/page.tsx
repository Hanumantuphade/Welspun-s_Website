import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Star, Clock, Tag } from "lucide-react"

export default function DealsPage() {
  const deals = [
    {
      id: 1,
      name: "Premium Bed Sheet Combo",
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      rating: 4.5,
      reviews: 234,
      image: "/placeholder.svg?height=300&width=300",
      timeLeft: "2 days left",
      badge: "Flash Sale",
    },
    {
      id: 2,
      name: "Luxury Towel Set",
      price: 899,
      originalPrice: 1599,
      discount: 44,
      rating: 4.3,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      timeLeft: "5 hours left",
      badge: "Limited Time",
    },
    {
      id: 3,
      name: "Designer Curtain Pair",
      price: 1299,
      originalPrice: 2199,
      discount: 41,
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      timeLeft: "1 day left",
      badge: "Hot Deal",
    },
    {
      id: 4,
      name: "Memory Foam Mattress",
      price: 12999,
      originalPrice: 19999,
      discount: 35,
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
      timeLeft: "3 days left",
      badge: "Best Seller",
    },
    {
      id: 5,
      name: "Decorative Cushion Set",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      rating: 4.2,
      reviews: 123,
      image: "/placeholder.svg?height=300&width=300",
      timeLeft: "6 hours left",
      badge: "Weekend Special",
    },
    {
      id: 6,
      name: "Blackout Curtains",
      price: 1799,
      originalPrice: 2799,
      discount: 36,
      rating: 4.4,
      reviews: 98,
      image: "/placeholder.svg?height=300&width=300",
      timeLeft: "4 days left",
      badge: "Popular",
    },
  ]

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
            <span className="text-amber-900 font-medium">Deals</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="py-8 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-2">🔥 Hot Deals & Offers</h1>
          <p className="text-xl opacity-90">Limited time offers - Don't miss out!</p>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                {/* Deal Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">{deal.badge}</span>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-full font-bold">
                    {deal.discount}% OFF
                  </span>
                </div>

                {/* Product Image */}
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Time Left */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-black/70 text-white text-center py-2 rounded-md">
                    <div className="flex items-center justify-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">{deal.timeLeft}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
                  {deal.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(deal.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({deal.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹{deal.price.toLocaleString()}</span>
                  <span className="text-lg text-gray-500 line-through">₹{deal.originalPrice.toLocaleString()}</span>
                </div>

                {/* Savings */}
                <div className="flex items-center space-x-1 mb-4">
                  <Tag className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-medium">
                    You save ₹{(deal.originalPrice - deal.price).toLocaleString()}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-amber-900 text-white py-3 rounded-md hover:bg-amber-800 transition-colors font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium">
            Load More Deals
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
