"use client"

import { useEffect, useState } from "react"

const promotionalMessages = [
  // "Buy Products worth Rs. 1999/- get a Free Towel Worth Rs. 999/-",
  // "Buy Products worth RS. 3000 and get a Free Bathrobe Worth Rs. 2599/-",
  // "Get Extra 10% off with HDFC cards on a cart value of RS 1000 and more",
  "Order Prepaid Products Easily On WhatsApp: +91-6284824078.",
  "See Product Images On WhatsApp: +91-6284824078."
]

export default function PromotionalTicker() {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % promotionalMessages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-900 text-white py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium mx-4">{promotionalMessages[currentMessage]}</span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(100%, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  )
}
