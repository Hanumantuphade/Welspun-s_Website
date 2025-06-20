"use client"

import Link from "next/link"
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import NavigationDropdown from "./navigation-dropdown"
import SearchOverlay from "./search-overlay"
import LoginPopup from "./login-popup"
import CartDropdown from "./cart-dropdown"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Sample cart items - in real app this would come from context/state management
  const cartItems = [
    {
      id: 1,
      name: "Premium Cotton Bed Sheet Set",
      price: 1999,
      quantity: 1,
      image: "/placeholder.svg?height=64&width=64",
      size: "Double",
      color: "White",
    },
    {
      id: 2,
      name: "Luxury Towel Set",
      price: 899,
      quantity: 2,
      image: "/placeholder.svg?height=64&width=64",
      color: "Blue",
    },
  ]

  const navItems = [
    { name: "Bath", href: "/bath" },
    { name: "Mattress", href: "/mattress" },
    { name: "Rugs", href: "/rugs" },
    { name: "Curtains", href: "/curtains" },
    { name: "Deals", href: "/deals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const bedDropdownItems = [
    { name: "Bed Sheets", href: "/bed/sheets" },
    { name: "Blankets", href: "/bed/blankets" },
    { name: "Duvet Covers", href: "/bed/duvet-covers" },
    { name: "Pillows", href: "/bed/pillows" },
    { name: "Mattress Protectors", href: "/bed/mattress-protectors" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold tracking-wide">Swarattan store</div>
              <div className="text-xs text-gray-500 ml-2 font-medium hidden sm:block">FABRIC OF HAPPY HOMES</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <NavigationDropdown title="Bed" items={bedDropdownItems} />
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-amber-900 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-600 hover:text-amber-900 transition-colors duration-200"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/wishlist"
              className="text-gray-600 hover:text-amber-900 transition-colors duration-200"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <button
              className="text-gray-600 hover:text-amber-900 transition-colors duration-200"
              aria-label="Account"
              onClick={() => setIsLoginOpen(true)}
            >
              <User className="h-5 w-5" />
            </button>
            <div className="relative">
              <button
                className="text-gray-600 hover:text-amber-900 transition-colors duration-200 relative"
                aria-label="Shopping cart"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </button>
              <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} />
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-600 hover:text-amber-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mounted && isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/bed"
                className="text-gray-600 hover:text-amber-900 text-sm font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Bed
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-amber-900 text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </div>
    </header>
  )
}
