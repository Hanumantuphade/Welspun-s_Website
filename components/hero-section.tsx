"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    image: "/Hero/hero1.png",
    title: "Experience Unmatched Comfort",
    subtitle1:
      "Discover our premium mattresses crafted for deep, restful sleep every night.",
    subtitle2:
      "Choose from our collection to find the perfect balance of comfort and support.",
    // href: "/mattresses/page.tsx",
  },
  {
    id: 2,
    image: "/Hero/hero2.jpeg",
    title: "Style Your Windows Beautifully",
    subtitle1:
      "Discover our elegant curtain collection to enhance every room’s ambiance.",
    subtitle2:
      "From sheer to blackout, find curtains that combine function with style.",
    // href: "/curtains",
  },
  {
    id: 3,
    image: "/Hero/hero3.png",
    title: "Wrap Yourself in Softness",
    subtitle1:
      " Explore our luxurious bedsheets crafted for ultimate comfort and style.",
    subtitle2:
      "From pure cotton to rich blends, explore options that suit your sleep needs.",
    // href: "/bed",
  },
  {
    id: 4,
    image: "/Hero/hero4.png",
    title: "Refresh, Relax, Renew",
    subtitle1:
      "From plush towels to cosy robes, find everything to elevate your bath routine.",
    subtitle2:
      "Explore elegant and absorbent bath essentials designed for comfort.",
    // href: "/bath",
  },
  {
    id: 5,
    image: "/Hero/hero5.jpeg",
    title: "Add Warmth Underfoot",
    subtitle1:
      "Discover rugs that blend comfort, style, and craftsmanship for every space.",
    subtitle2:
      "Explore our premium rug collection to enhance every room’s ambiance.",
    // href: "/rugs",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [mounted, nextSlide]);

  const currentSlideData = slides[currentSlide] || slides[0];

  if (!mounted) {
    return (
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src={slides[0].image || "/placeholder.svg"}
            alt={`${slides[0].title} ${slides[0].subtitle1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className=" relative md:-top-[65px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`${slide.title} ${slide.subtitle1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              {slide.title}
            </h2>
            <p className="text-gray-300 text-lg sm:text-base md:text-lg lg:text-xl mt-2">
              {slide.subtitle1}
            </p>
            <span className=" hidden md:block text-gray-300 text-sm sm:text-sm md:text-base lg:text-lg mt-1">
              {slide.subtitle2}
            </span>
            <div className="flex flex-wrap mt-7 gap-4">
              <Link
                href="/about"
                className="btn bg-white text-primary-800 hover:bg-primary-50 hover:text-primary-900 transition-all p-3 rounded-lg duration-300"
              >
                View Our Products
              </Link>
              <Link
                href="/contact"
                className="btn border-2 border-white text-white hover:bg-white hover:text-black transition-all p-3 rounded-lg duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 transform-translate-y-1/2 bg-transparent text-white rounded-full p-2 sm:p-3 transition-colors duration-200 shadow-lg z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 text-black sm:h-5 sm:w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 transform-translate-y-1/2 bg-black hover:bg-slate-200 text-white rounded-full p-2 sm:p-3 transition-colors duration-200 shadow-lg z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
