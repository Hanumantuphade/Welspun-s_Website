import Image from "next/image"

export default function PromotionalBanner() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="p-8 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-light mb-4">Summer Sale</h2>
              <p className="text-xl mb-6 opacity-90">Up to 60% off on selected home essentials</p>
              <ul className="space-y-2 mb-8 opacity-90">
                <li>• Free shipping on orders above ₹999</li>
                <li>• Easy returns within 30 days</li>
                <li>• Premium quality guaranteed</li>
              </ul>
              <button className="bg-white text-amber-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium">
                Shop Now
              </button>
            </div>

            {/* Image */}
            <div className="relative h-64 lg:h-80">
              <Image src="/placeholder.svg?height=400&width=600" alt="Summer Sale" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
