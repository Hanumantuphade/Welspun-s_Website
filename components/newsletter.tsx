import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="h-12 w-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl font-light text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and home decor
            tips.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
              <button className="bg-amber-900 text-white px-6 py-3 rounded-r-md hover:bg-amber-800 transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
