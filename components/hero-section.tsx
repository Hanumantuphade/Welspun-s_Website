"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    id: 1,
    image: "/hero-towels-fathers.webp",
    title: "Celebrate Comfort",
    subtitle: "This Father's Day",
    offer: "SHOP FOR ₹1999 & GET A TOWEL WORTH ₹999 FREE",
  },
  {
    id: 2,
    image: "/hero-bed-comfort.webp",
    title: "Comfort Deals",
    subtitle: "Discover The Spaces Bed Collection",
    offer: "Bedsheets • Quilts • Blankets • Kids Bed Sets",
  },
  {
    id: 3,
    image: "/hero-bath-collection.webp",
    title: "Comfort Deals",
    subtitle: "Discover The Spaces Bath Collection",
    offer: "Towels • Towel Sets • Bathrobes • Bath mats",
  },
  {
    id: 4,
    image: "/hero-bathrobe.webp",
    title: "Celebrate Comfort",
    subtitle: "This Father's Day",
    offer: "SHOP FOR ₹3000 & GET A BATHROBE WORTH ₹2599 FREE",
  },
  {
    id: 5,
    image: "/hero-pillows.webp",
    title: "Cloud-Like Comfort",
    subtitle: "Awaits",
    offer: "2 QUILTED MICRO PILLOWS FOR ₹999",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [mounted, nextSlide])

  const currentSlideData = slides[currentSlide] || slides[0]

  if (!mounted) {
    return (
      <div className="relative h-[600px] overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src={slides[0].image || "/placeholder.svg"}
            alt={`${slides[0].title} ${slides[0].subtitle}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Hero Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`${slide.title} ${slide.subtitle}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
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

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
