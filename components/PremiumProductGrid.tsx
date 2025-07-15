import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

interface PremiumProductGridProps {
  products: Product[];
}

export default function PremiumProductGrid({ products }: PremiumProductGridProps) {
  return (
    <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:px-12 gap-10">
      {products.map((product: Product) => (
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
  );
}
