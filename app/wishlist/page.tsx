import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search } from "lucide-react"

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-amber-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-
      </div>

      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <h1 className="text-3xl font-light text-amber-900 mb-8">My wishlist</h1>

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search item"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
          />
        </div>

        {/* Empty State */}
        <div className="text-center py-16">
          <p className="text-xl text-amber-900 font-medium">No products!</p>
          <p className="text-gray-600 mt-2">
            Start adding items to your wishlist by clicking the heart icon on products.
          </p>
          <button className="mt-6 bg-amber-900 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors font-medium">
            Continue Shopping
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
