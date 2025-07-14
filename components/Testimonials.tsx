"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Kapil Kaushik",
    rating: 5,
    text: "I gave my house project to Swarantan Home Decor, and I'm really happy with the results. They designed my home beautifully and gave it a trendy, modern look just the way I wanted. Highly recommended!",
  },
  {
    name: "Raman Sharma",
    rating: 5,
    text: "Swarantan Home Decor turned my dream home into a reality with their innovative designs and attention to detail. Professional and supportive throughout the entire process.",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Their bedding and curtains are of top-notch quality. My clients appreciate the aesthetics they bring to each project.",
  },
  {
    name: "Rohan Mehta",
    rating: 5,
    text: "The rugs I purchased added a luxurious feel to my living room. Great service and collection.",
  },
  {
    name: "Neha Kapoor",
    rating: 5,
    text: "After exploring many brands, I found Swarantan's designs unique and elegant. Worth every penny.",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % (testimonials.length - itemsPerView + 1)
    );
  };

  return (
    <>
    <div className="text-center mb-12">
      <h1 className="text-4xl font-light text-gray-400 tracking-wide mb-4" >CUSTOMER TESTIMONIALS</h1>
    </div>
    <section
      className="relative mx-auto sm:px-6 lg:px-8 bg-cover py-12 bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/topSeller/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 "></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* <h1 className="text-5xl md:text-5xl font-bold text-black mb-12 text-center"> Customer Testimonials</h1> */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          What Our Clients Say
        </h2>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className=" hidden md:block absolute left-2 sm:left-2 md:-left-6 lg:-left-10 -m-3 top-56 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full sm:p-2 md:p-3 lg:p-4 shadow transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="relative flex items-center">
          {/* Testimonials Slide */}
          <div className="overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex space-x-6"
              >
                {testimonials
                  .slice(currentIndex, currentIndex + itemsPerView)
                  .map((testimonial, i) => (
                    <div
                      key={i}
                      className="bg-white/80 backdrop-blur rounded-xl px-4 sm:px-6 py-6 sm:py-8 w-full md:w-1/2 shadow-lg"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        {testimonial.name}
                      </h3>
                      <div className="flex mb-4 text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <svg
                            key={j}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className=" hidden md:block absolute right-2 sm:right-2 md:-right-6 lg:-right-10 top-56 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full -m-3 p-2 sm:p-2 md:p-5 lg:p-4 shadow transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-5 md:w-5 lg:h-5 lg:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
    </>
  );
}
