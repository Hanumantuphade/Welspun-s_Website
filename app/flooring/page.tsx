import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import {  Star } from "lucide-react";

type FlooringProduct = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  colors?: string[];
  sizes?: string[];
  description: string;
  category: string;
  collection?: string;
};

// Sample Pexels images (ensure proper use per Pexels license :contentReference[oaicite:1]{index=1})
const flooringProducts: FlooringProduct[] = [
  // Existing SPC products (101–104)…

  // --- Multistile™ Tiles ---
  {
    id: 201,
    name: "Tawny Hickory",
    price: 799,
    originalPrice: 1099,
    rating: 4.2,
    reviews: 30,
    image: "https://cms.welspunflooring.com/uploads/HF_001586_41c77b4458.jpg",
    colors: ["Tawny Hickory"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Tawny Hickory",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 202,
    name: "Yellow Clay Oak",
    price: 799,
    originalPrice: 1099,
    rating: 4.3,
    reviews: 35,
    image: "https://cms.welspunflooring.com/uploads/HF_001580_1_857adc0bec.png",
    colors: ["Yellow Clay Oak"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Yellow Clay Oak",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 203,
    name: "Harvest Harmony",
    price: 799,
    originalPrice: 1099,
    rating: 4.4,
    reviews: 28,
    image:
      "https://cms.welspunflooring.com/uploads/SHF_00182_ade1c2c241_b015c59303.jpg",
    colors: ["Harvest Harmony"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Harvest Harmony",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 204,
    name: "Dark Walnut",
    price: 799,
    originalPrice: 1099,
    rating: 4.1,
    reviews: 22,
    image: "https://cms.welspunflooring.com/uploads/HF_001584_1_0426f149b3.png",
    colors: ["Dark Walnut"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Dark Walnut",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 205,
    name: "Whisker Oak",
    price: 799,
    originalPrice: 1099,
    rating: 4.0,
    reviews: 18,
    image:
      "https://cms.welspunflooring.com/uploads/HF_001578_HF_001580_99adecc4bd.jpg",
    colors: ["Whisker Oak"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Whisker Oak",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 206,
    name: "Evening Barley",
    price: 799,
    originalPrice: 1099,
    rating: 4.3,
    reviews: 20,
    image: "https://cms.welspunflooring.com/uploads/HF_001582_1_972544b7ef.png",
    colors: ["Evening Barley"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Evening Barley",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 207,
    name: "Sun Baked Oak",
    price: 799,
    originalPrice: 1099,
    rating: 4.2,
    reviews: 24,
    image: "https://cms.welspunflooring.com/uploads/HF_001583_1_8fa3a25f34.png",
    colors: ["Sun Baked Oak"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Sun Baked Oak",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 208,
    name: "Harbour Grey",
    price: 799,
    originalPrice: 1099,
    rating: 4.4,
    reviews: 29,
    image:
      "https://cms.welspunflooring.com/uploads/Harbour_grey_1_aa53a40ea9.jpg",
    colors: ["Harbour Grey"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Harbour Grey",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 209,
    name: "Cinnamon",
    price: 799,
    originalPrice: 1099,
    rating: 4.1,
    reviews: 16,
    image: "https://cms.welspunflooring.com/uploads/HF_001579_bd14a54ba5.jpg",
    colors: ["Cinnamon"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Cinnamon",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 210,
    name: "Serenity Sunflower",
    price: 799,
    originalPrice: 1099,
    rating: 4.5,
    reviews: 31,
    image: "https://cms.welspunflooring.com/uploads/HF_001588_1_b03ce753cd.png",
    colors: ["Serenity Sunflower"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Serenity Sunflower",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 211,
    name: "Brunette wood",
    price: 799,
    originalPrice: 1099,
    rating: 4.3,
    reviews: 21,
    image: "https://cms.welspunflooring.com/uploads/HF_001581_1_e2ea2e394d.png",
    colors: ["Brunette wood"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Brunette wood",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 212,
    name: "Aged Oak",
    price: 799,
    originalPrice: 1099,
    rating: 4.2,
    reviews: 27,
    image: "https://cms.welspunflooring.com/uploads/HF_001585_c5b1139804.jpg",
    colors: ["Aged Oak"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Aged Oak",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },
  {
    id: 213,
    name: "Java Wood",
    price: 799,
    originalPrice: 1099,
    rating: 4.4,
    reviews: 23,
    image: "https://cms.welspunflooring.com/uploads/HF_001587_1_3cd6458d3a.png",
    colors: ["Java Wood"],
    sizes: ["600×600 mm"],
    description: "Multistile™ Tile – Java Wood",
    category: "flooring",
    collection: "Multistile™ Tiles",
  },

  // --- Click‑N‑Lock® Wood – EDEN ---
  {
    id: 301,
    name: "Silver Striped Oak",
    price: 999,
    originalPrice: 1299,
    rating: 4.5,
    reviews: 48,
    image: "https://cms.welspunflooring.com/uploads/SHF_00386_ff419dbb6e.jpg",
    colors: ["Silver Striped Oak"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Silver Striped Oak",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 302,
    name: "Aged Oak",
    price: 999,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 41,
    image: "https://cms.welspunflooring.com/uploads/SHF_00381_d01a9ce892.jpg",
    colors: ["Aged Oak"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Aged Oak",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 303,
    name: "Cinnamon",
    price: 999,
    originalPrice: 1299,
    rating: 4.3,
    reviews: 38,
    image: "https://cms.welspunflooring.com/uploads/SHF_00380_80e9e2f803.jpg",
    colors: ["Cinnamon"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Cinnamon",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 304,
    name: "Wood Land Oak",
    price: 999,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 44,
    image: "https://cms.welspunflooring.com/uploads/unnamed_c0664cea76.webp",
    colors: ["Wood Land Oak"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Wood Land Oak",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 305,
    name: "Golden Oak",
    price: 999,
    originalPrice: 1299,
    rating: 4.5,
    reviews: 50,
    image: "https://cms.welspunflooring.com/uploads/SHF_00284_c83224aee5.jpg",
    colors: ["Golden Oak"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Golden Oak",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 306,
    name: "Natural Oak",
    price: 999,
    originalPrice: 1299,
    rating: 4.3,
    reviews: 35,
    image: "https://cms.welspunflooring.com/uploads/SHF_00283_b746f53983.jpg",
    colors: ["Natural Oak"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Natural Oak",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 307,
    name: "Serenity Peach",
    price: 999,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 29,
    image: "https://cms.welspunflooring.com/uploads/SHF_00176_2d0646314e.jpg",
    colors: ["Serenity Peach"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Serenity Peach",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 308,
    name: "Serenity Sunflower",
    price: 999,
    originalPrice: 1299,
    rating: 4.5,
    reviews: 32,
    image: "https://cms.welspunflooring.com/uploads/SHF_00175_de860e0ff0.jpg",
    colors: ["Serenity Sunflower"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Serenity Sunflower",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 309,
    name: "Cowboy Oak",
    price: 999,
    originalPrice: 1299,
    rating: 4.2,
    reviews: 27,
    image: "https://cms.welspunflooring.com/uploads/SHF_00174_ad1240b0d4.jpg",
    colors: ["Cowboy Oak"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Cowboy Oak",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 310,
    name: "Iced Oak",
    price: 999,
    originalPrice: 1299,
    rating: 4.1,
    reviews: 20,
    image: "https://cms.welspunflooring.com/uploads/SHF_00164_2032855144.jpg",
    colors: ["Iced Oak"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Iced Oak",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 311,
    name: "Heartwood",
    price: 999,
    originalPrice: 1299,
    rating: 4.3,
    reviews: 34,
    image: "https://cms.welspunflooring.com/uploads/SHF_00150_adacc2aabd.jpg",
    colors: ["Heartwood"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Heartwood",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 312,
    name: "Tawny Hickory",
    price: 999,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 28,
    image: "https://cms.welspunflooring.com/uploads/SHF_00149_ef04d3e9bf.jpg",
    colors: ["Tawny Hickory"],
    sizes: ["1200×200 mm"],
    description: "EDEN – Tawny Hickory",
    category: "flooring",
    collection: "EDEN",
  },

  {
    id: 313,
    name: "Yellow Clay Oak",
    price: 999,
    originalPrice: 1299,
    rating: 4.3,
    reviews: 30,
    image: "https://cms.welspunflooring.com/uploads/SHF_00387_614c04184b.jpg",
    description: "EDEN – Yellow Clay Oak",
    category: "flooring",
    collection: "EDEN",
  },
  {
    id: 314,
    name: "Brunette wood",
    price: 999,
    originalPrice: 1299,
    rating: 4.2,
    reviews: 25,
    image: "https://cms.welspunflooring.com/uploads/SHF_00379_4bf32679d1.jpg",
    description: "EDEN – Brunette wood",
    category: "flooring",
    collection: "EDEN",
  },

  // --- Click‑N‑Lock® Wood – BLISS ---
  {
    id: 401,
    name: "Brown Elm",
    price: 1099,
    originalPrice: 1399,
    rating: 4.4,
    reviews: 32,
    image: "https://cms.welspunflooring.com/uploads/SHF_00378_17f75ca298.jpg",
    description: "BLISS – Brown Elm",
    category: "flooring",
    collection: "BLISS",
  },
  {
    id: 402,
    name: "Natural Teak",
    price: 1099,
    originalPrice: 1399,
    rating: 4.3,
    reviews: 28,
    image: "https://cms.welspunflooring.com/uploads/SHF_00287_948c2a15f5.jpg",
    description: "BLISS – Natural Teak",
    category: "flooring",
    collection: "BLISS",
  },
  {
    id: 403,
    name: "Teak Brown",
    price: 1099,
    originalPrice: 1399,
    rating: 4.5,
    reviews: 34,
    image: "https://cms.welspunflooring.com/uploads/SHF_00286_72ebe52e52.jpg",
    description: "BLISS – Teak Brown",
    category: "flooring",
    collection: "BLISS",
  },
  {
    id: 404,
    name: "Copper Oak",
    price: 1099,
    originalPrice: 1399,
    rating: 4.4,
    reviews: 30,
    image: "https://cms.welspunflooring.com/uploads/SHF_00184_4ae3775f1c.jpg",
    description: "BLISS – Copper Oak",
    category: "flooring",
    collection: "BLISS",
  },
  {
    id: 405,
    name: "Harvest Harmony",
    price: 1099,
    originalPrice: 1399,
    rating: 4.3,
    reviews: 29,
    image: "https://cms.welspunflooring.com/uploads/SHF_00182_ade1c2c241.jpg",
    description: "BLISS – Harvest Harmony",
    category: "flooring",
    collection: "BLISS",
  },
  {
    id: 406,
    name: "Shaker Oak",
    price: 1099,
    originalPrice: 1399,
    rating: 4.2,
    reviews: 27,
    image: "https://cms.welspunflooring.com/uploads/SHF_00181_37d97e7b7c.jpg",
    description: "BLISS – Shaker Oak",
    category: "flooring",
    collection: "BLISS",
  },
  {
    id: 407,
    name: "Coastal Sand Oak",
    price: 1099,
    originalPrice: 1399,
    rating: 4.4,
    reviews: 31,
    image: "https://cms.welspunflooring.com/uploads/SHF_00178_888ea270ae.jpg",
    description: "BLISS – Coastal Sand Oak",
    category: "flooring",
    collection: "BLISS",
  },
  {
    id: 408,
    name: "Java Wood",
    price: 1099,
    originalPrice: 1399,
    rating: 4.3,
    reviews: 26,
    image: "https://cms.welspunflooring.com/uploads/SHF_00188_88aa2f2b49.jpg",
    description: "BLISS – Java Wood",
    category: "flooring",
    collection: "BLISS",
  },

  // --- Click‑N‑Lock® Wood – ARISTO ---
  {
    id: 501,
    name: "Whisker Oak",
    price: 1199,
    originalPrice: 1499,
    rating: 4.3,
    reviews: 22,
    image:"https://cms.welspunflooring.com/uploads/SHF_00171_bcec15f311.jpg",
    description: "ARISTO – Whisker Oak",
    category: "flooring",
    collection: "ARISTO",
  },
  {
    id: 502,
    name: "Rosid",
    price: 1199,
    originalPrice: 1499,
    rating: 4.2,
    reviews: 19,
    image: "https://cms.welspunflooring.com/uploads/Aristo_SHF_00151_001_0edd66ee3f.jpg",
    description: "ARISTO – Rosid",
    category: "flooring",
    collection: "ARISTO",
  },
  {
    id: 503,
    name: "Luisiann Laurel",
    price: 1199,
    originalPrice: 1499,
    rating: 4.1,
    reviews: 18,
    image: "https://cms.welspunflooring.com/uploads/SHF_00148_1e34941d16.jpg",
    description: "ARISTO – Luisiann Laurel",
    category: "flooring",
    collection: "ARISTO",
  },
  {
    id: 504,
    name: "Almond",
    price: 1199,
    originalPrice: 1499,
    rating: 4.0,
    reviews: 20,
    image: "https://cms.welspunflooring.com/uploads/SHF_00288_1_db631e30b5.jpg",
    description: "ARISTO – Almond",
    category: "flooring",
    collection: "ARISTO",
  },
  {
    id: 505,
    name: "Light Oak",
    price: 1199,
    originalPrice: 1499,
    rating: 4.3,
    reviews: 23,
    image: "https://cms.welspunflooring.com/uploads/SHF_00282_070d61a2b6.jpg",
    description: "ARISTO – Light Oak",
    category: "flooring",
    collection: "ARISTO",
  },
  {
    id: 506,
    name: "Sea Salt",
    price: 1199,
    originalPrice: 1499,
    rating: 4.1,
    reviews: 17,
    image: "https://cms.welspunflooring.com/uploads/SHF_00408_1_ba94c2b72a.jpg",
    description: "ARISTO – Sea Salt",
    category: "flooring",
    collection: "ARISTO",
  },
  {
    id: 507,
    name: "Surrender Skies",
    price: 1199,
    originalPrice: 1499,
    rating: 4.2,
    reviews: 15,
    image: "https://cms.welspunflooring.com/uploads/SHF_00410_1_f66c2d0122.jpg",
    description: "ARISTO – Surrender Skies",
    category: "flooring",
    collection: "ARISTO",
  },
];

export default function FlooringPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
        Buy Products worth Rs. 1999/- get a Free Florring Rs. 999/-
      </div>
      <Header />
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-500">
            Home <span className="mx-2 text-gray-400">/</span>
            <span className="text-sky-600 font-medium">Curtains</span>
          </nav>
        </div>
      </div>

      {/* Hero with Pexels background */}
      <div className="relative h-[420px] flex items-center justify-center text-center">
        <img
          src="https://images.pexels.com/photos/1376487/pexels-photo-1376487.jpeg"
          alt="Modern wood flooring"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Styles that cater to different spaces and budgets
          </h1>
          <p className="text-lg text-gray-700 mb-1">
            Designs that impress the Earth as well
          </p>
        </div>
      </div>

      {/* Products Grid */}
<div className="w-full max-w-full mx-auto pt-10 px-2 md:px-12 lg:px-16 xl:px-16 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
  {flooringProducts.map((prod) => (
    <Link key={prod.id} href={`/product/${prod.category}/${prod.id}`}>
      <div className="group cursor-pointer border rounded-lg overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative aspect-square bg-gray-100">
          <Image
            src={prod.image || "/placeholder.svg"}
            alt={prod.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-medium text-gray-900 group-hover:text-amber-900 transition-colors">
            {prod.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{prod.description}</p>
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(prod.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({prod.reviews})</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-semibold text-gray-900">₹{prod.price}</span>
            <span className="text-sm line-through text-gray-500">₹{prod.originalPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>


      <Footer />
    </div>
  );
}