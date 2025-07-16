"use client";

import { useParams } from "next/navigation";
import { productsData } from "@/components/data/productsData";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import ProductTabs from "@/components/ProductTabs";
import { Product } from "@/types";

export default function ProductDetailPage() {
  const { category, id } = useParams();
  const { addToCart } = useCart();

  const product = productsData.find(
    (p: Product) => p.id === parseInt(id as string) && p.category === category
  );

  const [selectedImage, setSelectedImage] = useState<string>(
    product?.images?.[0] || product?.image || ""
  );
  const [qty, setQty] = useState<number>(1);

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.sizes[0],
        color: product.colors[0],
      });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <div className="max-w-full w-full mx-auto px-4 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {/* LEFT: Product Images */}
        <div>
          <div
            className="relative w-full rounded overflow-hidden bg-gray-100 mb-4"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {[product.image, ...product.images].filter(Boolean).map((img, i) => (
              <div
                key={i}
                className={`relative flex-shrink-0 w-20 h-20 cursor-pointer border rounded ${
                  selectedImage === img ? "border-amber-800" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-semibold mb-1">{product.name}</h1>
          <p className="text-sm text-amber-900 font-medium mb-3">By Swarattan</p>

          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              ₹{product.price}
            </span>
            <span className="line-through text-gray-500 text-base">
              ₹{product.originalPrice}
            </span>
            <span className="text-sm text-green-600 font-semibold">
              (
              {Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) *
                  100
              )}
              % OFF)
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-3">
            Inclusive of all taxes. Shipping calculated at checkout.
          </p>

          <div className="mb-4 text-orange-600 font-semibold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
            Hurry Up! Last Few Items in stock
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6 w-full">
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, +e.target.value))}
              className="w-full sm:w-20 px-3 py-2 border rounded-md"
            />
            <button
              onClick={handleAddToCart}
              className="bg-amber-900 text-white px-6 py-3 rounded-md hover:bg-amber-800 w-full sm:w-auto"
            >
              ADD TO CART
            </button>
          </div>

          <ProductTabs product={product} />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
