"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SearchOverlay from "./search-overlay";
import LoginPopup from "./login-popup";
import CartDropdown from "./cart-dropdown";

export default function Header() {
  const { cartItems } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Bed", href: "/bed" },
    { name: "Bath", href: "/bath" },
    { name: "Mattress", href: "/mattress" },
    { name: "Rugs", href: "/rugs" },
    { name: "Curtains", href: "/curtains" },
    { name: "Flooring", href: "/flooring" },
    { name: "Deals", href: "/deals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Close cart dropdown when clicking outside
  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalQuantity = cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <img
                src="/About.jpeg"
                alt="Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
            </Link>
            <span className="hidden md:block text-xl font-bold text-transparent bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text">
              Swarattan Store
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[17px] font-medium text-black hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="text-black hover:text-orange-500 transition"
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="text-black hover:text-red-500 transition"
            >
              <Heart className="h-5 w-5" />
            </Link>

            <button
              aria-label="Account"
              onClick={() => setIsLoginOpen(true)}
              className="text-black hover:text-red-500 transition"
            >
              <User className="h-5 w-5" />
            </button>

            {/* Cart with dropdown */}
            <div ref={cartRef} className="relative">
              <button
                aria-label="Shopping cart"
                onClick={() => setIsCartOpen((prev) => !prev)}
                className="text-black hover:text-red-500 transition relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-[10px] font-medium rounded-full min-w-[16px] h-4 flex items-center justify-center px-[2px]">
                    {totalQuantity}
                  </span>
                )}
              </button>

              {/* ✅ Updated: removed items={cartItems} */}
              <CartDropdown
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            </div>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden text-gray-600 hover:text-amber-900 transition"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-[16px] font-medium text-gray-700 hover:text-amber-900 transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Overlays */}
        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </div>
    </header>
  );
}
