"use client";

import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

const premiumProducts = [
  {
    id: 1,
    name: "Premium Cotton Bedsheet",
    image: "/topSeller/s1.jpeg",
    price: "₹1499",
    description: "Soft and elegant premium cotton bedsheet.",
  },
  {
    id: 2,
    name: "Luxury Floral Bedsheet",
    image: "/topSeller/s2.jpeg",
    price: "₹1799",
    description: "Luxury floral print bedsheet for elegance.",
  },
  {
    id: 3,
    name: "LUXURY COLLECTION",
    image: "/topSeller/s3.jpeg",
    price: "₹2499",
    description: "Transform your bedroom into a luxury suite",
  },
  {
  id: 4,
  name: "PREMIUM COMFORT",
  image: "/topSeller/s4.jpg",
  price: "₹2999",
  description: "Experience unmatched comfort with our premium collection",
},
{
  id: 5,
  name: "ELEGANT DESIGNS",
  image: "/topSeller/s5.jpg",
  price: "₹1999",
  description: "Upgrade your decor with elegant bedsheet designs",
},
{
  id: 6,
  name: "SOFT TOUCH",
  image: "/topSeller/s6.jpg",
  price: "₹1799",
  description: "Feel the softness of our ultra-smooth fabrics",
},
{
  id: 7,
  name: "ROYAL COLLECTION",
  image: "/topSeller/s7.jpg",
  price: "₹3499",
  description: "Bring home the royalty with this luxurious collection",
},
{
  id: 8,
  name: "EVERYDAY ESSENTIALS",
  image: "/topSeller/s8.jpg",
  price: "₹1499",
  description: "Perfect essentials for everyday comfort and style",
},
{
  id: 9,
  name: "MODERN GEOMETRIC",
  image: "/topSeller/s9.jpg",
  price: "₹1899",
  description: "Modern geometric patterns to elevate your room decor.",
},
{
  id: 10,
  name: "FLORAL DELIGHT",
  image: "/topSeller/s10.jpg",
  price: "₹1599",
  description: "Bright floral prints for a refreshing bedroom look.",
},
{
  id: 11,
  name: "ROYAL BLUE LUXURY",
  image: "/topSeller/s11.jpg",
  price: "₹2799",
  description: "Experience luxury with our royal blue bedsheet collection.",
},
{
  id: 12,
  name: "PASTEL BLISS",
  image: "/topSeller/s12.jpg",
  price: "₹1699",
  description: "Calming pastel shades for soothing sleep.",
},
{
  id: 13,
  name: "CLASSIC WHITE",
  image: "/topSeller/s13.jpg",
  price: "₹1399",
  description: "Elegant white bedsheet for timeless appeal.",
},
{
  id: 14,
  name: "CHECKERED STYLE",
  image: "/topSeller/s14.jpg",
  price: "₹1499",
  description: "Stylish checkered pattern for modern homes.",
},
{
  id: 15,
  name: "EARTHY BROWN",
  image: "/topSeller/s15.jpg",
  price: "₹1599",
  description: "Warm earthy tones for cosy bedrooms.",
},
{
  id: 16,
  name: "ELEGANT GREY",
  image: "/topSeller/s16.jpg",
  price: "₹1799",
  description: "Minimalistic grey bedsheet for urban decor.",
},
{
  id: 17,
  name: "SUNSHINE YELLOW",
  image: "/topSeller/s17.jpg",
  price: "₹1699",
  description: "Bright yellow bedsheet for cheerful mornings.",
},
{
  id: 18,
  name: "ROYAL MAROON",
  image: "/topSeller/s18.jpg",
  price: "₹2299",
  description: "Deep maroon shades for a royal bedroom feel.",
},
{
  id: 19,
  name: "TEAL TOUCH",
  image: "/topSeller/s19.jpg",
  price: "₹1599",
  description: "Teal coloured bedsheet for a vibrant look.",
},
{
  id: 20,
  name: "BLACK ELEGANCE",
  image: "/topSeller/s20.jpg",
  price: "₹1999",
  description: "Elegant black bedsheet for a bold statement.",
},
{
  id: 21,
  name: "RUSTIC CHARM",
  image: "/topSeller/s21.jpg",
  price: "₹1899",
  description: "Rustic prints for a vintage-inspired bedroom.",
},
{
  id: 22,
  name: "PEACH BLOSSOM",
  image: "/topSeller/s22.jpg",
  price: "₹1799",
  description: "Peach blossom prints for a delicate touch.",
},
{
  id: 23,
  name: "LUXURY SATIN",
  image: "/topSeller/s23.jpg",
  price: "₹2999",
  description: "Smooth satin bedsheet for ultimate luxury.",
},
{
  id: 24,
  name: "GOLDEN GRACE",
  image: "/topSeller/s24.jpg",
  price: "₹2499",
  description: "Add grace with this golden printed bedsheet.",
},
{
  id: 25,
  name: "NAVY PREMIUM",
  image: "/topSeller/s25.jpg",
  price: "₹1899",
  description: "Premium navy bedsheet for elegant interiors.",
},
{
  id: 26,
  name: "FOREST GREEN",
  image: "/topSeller/s26.jpg",
  price: "₹1599",
  description: "Forest green bedsheet for a refreshing vibe.",
},
{
  id: 27,
  name: "PURPLE ROYALTY",
  image: "/topSeller/s27.jpg",
  price: "₹1999",
  description: "Royal purple bedsheet for luxurious bedrooms.",
},
{
  id: 28,
  name: "SILVER SHINE",
  image: "/topSeller/s28.jpg",
  price: "₹2799",
  description: "Shimmering silver bedsheet for modern luxury.",
},
{
  id: 29,
  name: "COFFEE BROWN",
  image: "/topSeller/s29.jpg",
  price: "₹1699",
  description: "Rich coffee brown bedsheet for warm interiors.",
},
{
  id: 30,
  name: "CRIMSON RED",
  image: "/topSeller/s30.jpg",
  price: "₹2199",
  description: "Crimson red bedsheet for festive elegance.",
},
{
  id: 31,
  name: "IVORY CLASSIC",
  image: "/topSeller/s31.jpg",
  price: "₹1499",
  description: "Classic ivory bedsheet for timeless beauty.",
},
{
  id: 32,
  name: "OMBRE STYLE",  
  image: "/topSeller/s32.jpg",
  price: "₹1899",
  description: "Ombre shaded bedsheet for a trendy look.",
},


  // Add more products as needed
];

export default function PremiumBedsheetsPage() {
  return (
    <div className="min-h-screen bg-white max-w-full w-full mx-auto px-4 pb-6 ">
      <Header />
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-full w-full mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Bed</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Premium</span>
          </nav>
        </div>
      </div>
      {/* Background Image with Overlay and Text */}
      <div className="relative md:h-[440px] lg:[530px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="/topSeller/hero1.png"
            alt="page"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white px-4">
          <h1 className="text-4xl font-light bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent mb-2">
            Premium Bedsheet Collection
          </h1>
          <p className="text-gray-100">
            <span className="text-xl">
              Transform your bedroom with our luxurious bedsheet range.
            </span>{" "}
            <br />{" "}
            <span className="text-lg">
              Discover ultra-soft fabrics and elegant designs for ultimate
              comfort.
            </span>{" "}
            <br /> <span className="hidden md:block"> Drift into a peaceful sleep and wake up feeling refreshed.</span>
          </p>
        </div>
      </div>
      <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:px-12 gap-10">
        {premiumProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h2 className="text-xl font-medium">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-orange-600 font-semibold mt-2">
                {product.price}
              </p>
              <Link
                href="#"
                className="inline-block mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
