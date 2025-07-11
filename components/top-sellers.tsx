"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useCallback } from "react";

const topSellerSlides = [
  {
    id: 1,
    image: "/topSeller/s4.jpg",
    title: "FLORA COLLECTION",
    subtitle: "Elegant floral patterns for your bedroom",
    buttonText: "SHOP NOW",
    href: "/bed",
  },
  {
    id: 2,
    image: "/topSeller/s6.jpg",
    title: "PREMIUM COTTON",
    subtitle: "Soft and comfortable bedding essentials",
    buttonText: "SHOP NOW",
    href: "/bed",
  },
  {
    id: 3,
    image: "/topSeller/s8.jpg",
    title: "LUXURY COLLECTION",
    subtitle: "Transform your bedroom into a luxury suite",
    buttonText: "SHOP NOW",
    href: "/bed",
  },
];

export default function TopSellers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % topSellerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + topSellerSlides.length) % topSellerSlides.length);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-amber-900 tracking-wide mb-4">
            TOP SELLERS
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative h-[400px] lg:h-[430px] xl:h[500px] overflow-hidden rounded-lg">
          {/* Slides */}
          {topSellerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
                    {slide.title}
                  </h3>
                  <p className="text-lg mb-8 opacity-90">{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-none font-medium tracking-wide transition-colors duration-200"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-amber-900 hover:bg-amber-800 text-white rounded-full p-3 transition-colors duration-200 shadow-lg z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-amber-900 hover:bg-amber-800 text-white rounded-full p-3 transition-colors duration-200 shadow-lg z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
