"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface LoginPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium text-gray-900">Account</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact</h3>
            <div className="text-right mb-4">
              <button className="text-amber-900 hover:underline text-sm">Log in</button>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-3 border-2 border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
              />
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-amber-900 border-amber-900 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Email me with news and offers</span>
              </label>
            </div>
          </div>

          {/* Delivery Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Country/Region</label>
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent">
                  <option>India</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
              />

              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                />
                <select className="px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent">
                  <option>Haryana</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                </select>
                <input
                  type="text"
                  placeholder="PIN code"
                  className="px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
              />

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 text-amber-900 border-amber-900 rounded" />
                <span className="text-sm text-gray-700">Save this information for next time</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <button className="w-full bg-amber-900 text-white py-3 rounded-md hover:bg-amber-800 transition-colors font-medium">
              Continue
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
