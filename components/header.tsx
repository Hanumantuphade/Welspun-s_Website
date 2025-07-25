"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SearchOverlay from "./search-overlay";
import LoginPopup from "./login-popup";
import CartDropdown from "./cart-dropdown";
import NavigationDropdown from "./navigation-dropdown";

export default function Header() {
  const { cartItems } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Rugs", href: "/rugs" },
    { name: "Curtains", href: "/curtains" },
    { name: "Flooring", href: "/flooring" },
    { name: "Deals", href: "/deals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Category data examples
  const bedCategories = [
    {
      category: "Bedsheets",
      subcategories: [
        "Fitted",
        "Premium",
      ],
    },
    {
      category: "Blankets",
      subcategories: [
        "Single",
        "Embrace",
       
      ],
    },
    // {
    //   category: "Simple Bedsheets",
    //   subcategories: ["New Arrivals", "Single", "Double", "Large", "Fitted"],
    // },
  ];

  const bathCategories = [
    {
      category: "Towels",
      subcategories: [ "Hand Towels",],
    },
   
  ];

  const mattressCategories = [
    
    {
      category: "Otherapedic Mattress",
      subcategories: [],
    },
  ];

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

  const totalQuantity =
    cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="sticky top-0 max-w-full z-50 w-full bg-transparent">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <img
                src="/About.jpeg"
                alt="Logo"
                className="h-14 w-14 rounded-full object-cover"
              />
            </Link>
            <div className="hidden lg:block">
              <p className="text-xl font-bold text-transparent bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text">
                Swarattan Homes
              </p>
              <p className="text-sm text-gray-900">For Your Own Best</p>
              <p className="text-sm text-gray-900">Presenting The Best</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <NavigationDropdown
              title="Bed"
              href="/bed"
              categories={bedCategories}
              image="/topSeller/Bedsheets/premium/s17.jpg"
            />

            <NavigationDropdown
              title="Bath"
              href="/bath"
              categories={bathCategories}
              image="/images/bathSection/bath3/b1.png"
            />

            <NavigationDropdown
              title="Mattress"
              href="/mattress"
              categories={mattressCategories}
              image="/images/MattressSection/mat3/m1.png"
            />

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

            {/* Cart */}
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
              <CartDropdown
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            </div>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden text-black hover:text-red-500 transition"
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
              <Link
                href="/bed"
                className="px-4 py-2 text-[16px] font-medium text-black hover:text-amber-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Bed
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-[16px] font-medium text-black hover:text-amber-900 transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Overlays */}
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
