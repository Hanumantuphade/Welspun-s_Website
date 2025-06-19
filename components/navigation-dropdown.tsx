"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface DropdownItem {
  name: string
  href: string
  subcategories?: string[]
}

interface NavigationDropdownProps {
  title: string
  items: DropdownItem[]
}

export default function NavigationDropdown({ title, items }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const bedCategories = {
    "BED SHEET": ["NEW ARRIVALS", "SINGLE", "DOUBLE", "LARGE", "FITTED"],
    BLANKET: ["SINGLE", "DOUBLE", "KIDS"],
    "DUVET COVER": ["SINGLE", "DOUBLE", "DOHAR"],
    "MATTRESS PROTECTOR": ["ALL BED"],
    PILLOW: ["PILLOW COVER"],
    "BED IN A BAG": [],
    "QUILT / AC COMFORTER": ["SINGLE", "DOUBLE"],
    "KIDS BED": ["BEDSHEET", "QUILT", "KIDS BED"],
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link
        href="/bed"
        className="text-gray-600 hover:text-amber-900 text-sm font-medium transition-colors duration-200 flex items-center"
      >
        {title}
        <ChevronDown className="h-3 w-3 ml-1" />
      </Link>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[800px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6">
          <div className="grid grid-cols-4 gap-6">
            {/* Left side - Main categories */}
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(bedCategories).map(([category, subcategories]) => (
                  <div key={category} className="space-y-2">
                    <h3 className="font-semibold text-gray-900 text-sm border-b border-gray-200 pb-1">{category}</h3>
                    <div className="space-y-1">
                      {subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`/bed/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block text-xs text-gray-600 hover:text-amber-900 transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Featured image */}
            <div className="col-span-1">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
                <img src="/hero-bed-comfort.webp" alt="Bed Collection" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
