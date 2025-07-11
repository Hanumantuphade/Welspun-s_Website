"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
  subcategories?: string[];
}

interface NavigationDropdownProps {
  title: string;
  items: DropdownItem[];
}

export default function NavigationDropdown({
  title,
  items,
}: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const bedCategories = {
    "Premium BedSheets": [
      "NEW ARRIVALS",
      "SINGLE",
      "DOUBLE",
      "LARGE",
      "FITTED",
    ],
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/bed"
        className="text-black hover:text-orange-500 text-[17px] font-medium transition-colors duration-200 flex items-center"
      >
        {title}
        <ChevronDown className="h-3 w-3 ml-1" />
      </Link>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[400px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6">
          <div className="">
            {/* Left side - Main categories */}
            {Object.entries(bedCategories).map(([category, subcategories]) => (
              <div key={category} className="space-y-2">
                <Link
                  href="/bed/premium"
                  className="font-thin text-gray-900 text-sm block transition-colors border-b border-gray-200 pb-1 hover:text-sky-600"
                >
                  {category}
                </Link>
              </div>
            ))}
            {/* Right side - Featured image */}
            <div className="col-span-1">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
                <img
                  src="/topSeller/s1.jpeg"
                  alt="Bed Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
