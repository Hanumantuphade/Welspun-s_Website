"use client"

import { Search, X } from "lucide-react"
import { useEffect } from "react"

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center">
      <div className="w-full bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-amber-900" />
            <input
              type="text"
              placeholder="Search our store"
              className="flex-1 text-lg border-none outline-none placeholder-gray-500"
              autoFocus
            />
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close search"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
