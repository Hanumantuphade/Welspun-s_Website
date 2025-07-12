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
    go: "/mattress",
  },
  {
    id: 2,
    image: "/Hero/hero2.jpeg",
    title: "Transform Your Space with Elegant Flooring",
    subtitle1:
      "Explore our premium flooring collections designed to elevate every corner of your home.",
    subtitle2:
      "From modern laminates to timeless wooden textures, find the perfect flooring to match your style.",
    go: "/flooring",
  },
  {
    id: 3,
    image: "/Hero/hero3.png",
    title: "Style Your Windows Beautifully",
    subtitle1:
      "Discover our elegant curtain collection to enhance every room’s ambiance.",
    subtitle2:
      "From sheer to blackout, find curtains that combine function with style.",
    go: "/curtains",
  },
  {
    id: 4,
    image: "/Hero/hero4.png",
    title: "Wrap Yourself in Softness",
    subtitle1:
      " Explore our luxurious bedsheets crafted for ultimate comfort and style.",
    subtitle2:
      "From pure cotton to rich blends, explore options that suit your sleep needs.",
    go: "/bed",
  },
  {
    id: 5,
    image: "/Hero/hero5.png",
    title: "Refresh, Relax, Renew",
    subtitle1:
      "From plush towels to cosy robes, find everything to elevate your bath routine.",
    subtitle2:
      "Explore elegant and absorbent bath essentials designed for comfort.",
    go: "/bath",
  },

  {
    id: 6,
    image: "/Hero/hero6.png",
    title: "Add Warmth Underfoot",
    subtitle1:
      "Discover rugs that blend comfort, style, and craftsmanship for every space.",
    subtitle2:
      "Explore our premium rug collection to enhance every room’s ambiance.",
    go: "/rugs",
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
      <div className="relative sm:h-[200px] md:max-h-screen lg:max-h-screen overflow-hidden bg-gray-100">
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
  <div className="relative md:-top-[65px] lg:-top-[65px] h-screen overflow-hidden">
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
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            {slide.title}
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
            {slide.subtitle1}
          </p>
          <span className="hidden md:block text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mt-1">
            {slide.subtitle2}
          </span>
          <div className="flex flex-wrap mt-7 gap-4">
            <Link
              href={currentSlideData.go}
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
