"use client"

import Image from "next/image"
import { useState } from "react"

interface ProductHotspot {
  id: number
  x: number // percentage from left
  y: number // percentage from top
  product: {
    name: string
    price: number
    image?: string
  }
}

const hotspots: ProductHotspot[] = [
  {
    id: 1,
    x: 15,
    y: 25,
    product: {
      name: "Abstract Multi 100% Cotton Cushion Covers",
      price: 436,
    },
  },
  {
    id: 2,
    x: 45,
    y: 35,
    product: {
      name: "Geometric Pattern Bed Sheet Set",
      price: 1299,
    },
  },
  {
    id: 3,
    x: 75,
    y: 45,
    product: {
      name: "Orange Duvet Cover Set",
      price: 899,
    },
  },
  {
    id: 4,
    x: 25,
    y: 65,
    product: {
      name: "Decorative Throw Pillow",
      price: 599,
    },
  },
  {
    id: 5,
    x: 85,
    y: 25,
    product: {
      name: "Modern Cushion Set",
      price: 799,
    },
  },
  {
    id: 6,
    x: 65,
    y: 75,
    product: {
      name: "Comfort Blanket",
      price: 1199,
    },
  },
]

export default function ShopTheLook() {
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-amber-900 tracking-wide">SHOP THE LOOK</h2>
        </div>

        {/* Interactive Image */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image src="/shop-the-look.webp" alt="Shop the Look - Bedroom Setup" fill className="object-cover" />

            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                }}
                onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                {/* Hotspot Dot */}
                <div className="relative">
                  <div className="w-6 h-6 bg-white border-2 border-amber-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                    <div className="w-2 h-2 bg-amber-900 rounded-full"></div>
                  </div>

                  {/* Animated Ring */}
                  <div className="absolute inset-0 w-6 h-6 border-2 border-amber-900 rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Product Popup */}
                {hoveredHotspot === hotspot.id && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 min-w-[250px] z-10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt={hotspot.product.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm leading-tight">{hotspot.product.name}</h3>
                        <p className="text-amber-900 font-semibold mt-1">₹{hotspot.product.price}</p>
                      </div>
                      <div className="text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Popup Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                      <div className="w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45 -mt-1.5"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
