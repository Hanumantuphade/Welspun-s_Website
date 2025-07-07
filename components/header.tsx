"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import SearchOverlay from "./search-overlay";
import LoginPopup from "./login-popup";
import CartDropdown from "./cart-dropdown";

export default function Header() {
  const { cartItems } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navItems = [
    { name: "Bed", href: "/bed" },
    { name: "Bath", href: "/bath" },
    { name: "Mattress", href: "/mattress" },
    { name: "Rugs", href: "/rugs" },
    { name: "Curtains", href: "/curtains" },
    { name: "Deals", href: "/deals" },
    { name: "About", href: "/about" },
    { name: "Flooring", href: "/flooring" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex justify-center items-center">
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="h-10 w-[150px] sm:w-[180px] md:w-[200px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
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
          <div className="flex items-center space-x-2 sm:space-x-4">
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
                <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-[10px] rounded-full min-w-[16px] h-4 flex items-center justify-center font-medium">
                  {cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0}
                </span>
              </button>
              <CartDropdown
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
              />
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-600 hover:text-amber-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mounted && isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-amber-900 text-sm font-medium transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
        <LoginPopup
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
      </div>
    </header>
  );
}
