"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Category {
  category: string;
  subcategories: string[];
}

interface NavigationDropdownProps {
  title: string;
  href: string;
  categories: Category[];
  image?: string;
}

export default function NavigationDropdown({
  title,
  href,
  categories,
  image,
}: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        className="text-black hover:text-orange-500 text-[17px] font-medium transition-colors duration-200 flex items-center"
      >
        {title}
        <ChevronDown className="h-3 w-3 ml-1" />
      </Link>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[450px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.category}>
                <Link
                  href={`${href}/${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-semibold text-gray-900 text-sm block transition-colors hover:text-sky-600 mb-1"
                >
                  {cat.category}
                </Link>
                <ul className="pl-2 space-y-1">
                  {cat.subcategories.map((sub) => (
                    <li key={sub}>
                      <Link
                        href={`${href}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-700 text-xs block transition-colors hover:text-sky-600"
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {image && (
            <div className="bg-gray-100 rounded-lg overflow-hidden h-48">
              <img
                src={image}
                alt={`${title} Collection`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
