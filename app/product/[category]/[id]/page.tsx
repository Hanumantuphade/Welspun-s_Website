// 'use client';
// import ProductTabs from "@/components/ProductTabs";
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// import { useEffect, useState } from 'react';
// import { useCart } from '@/app/context/CartContext';
// import { Product } from '@/types';

// const productsData: Product[] = [
 
//   // ➡️ Add other products similarly with their images
// ];

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedImage, setSelectedImage] = useState<string>('');
//   const { addToCart } = useCart();

//   useEffect(() => {
//     const prod = productsData.find(p => p.id === parseInt(id as string));
//     if (prod) {
//       setProduct(prod);
//       setSelectedImage(prod.images ? prod.images[0] : prod.image);
//     }
//   }, [id]);

//   if (!product) return <div className="p-10 text-center">Loading...</div>;

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* LEFT: Product Images */}
//         <div>
//           {/* Big image */}
//           <div className="relative h-[400px] w-full aspect-square mb-4  overflow-hidden bg-gray-100">
//             <Image
//               src={selectedImage}
//               alt={product.name}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-2">
//             {product.images?.map((img, i) => (
//               <div
//                 key={i}
//                 className={`relative w-20 h-20 cursor-pointer border ${
//                   selectedImage === img ? 'border-amber-800' : 'border-gray-300'
//                 }`}
//                 onClick={() => setSelectedImage(img)}
//               >
//                 <Image
//                   src={img}
//                   alt={`Thumbnail ${i}`}
//                   fill
//                   className="object-cover rounded"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Product Details */}
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-900 mb-1">
//             {product.name}
//           </h1>
//           <p className="text-sm text-amber-900 font-medium mb-3">By Swarattan</p>

//           <div className="flex items-center space-x-3 mb-3">
//             <span className="text-xl font-bold text-gray-900">
//               ₹{product.price}
//             </span>
//             <span className="line-through text-gray-500 text-sm">
//               ₹{product.originalPrice}
//             </span>
//             <span className="text-sm text-green-600 font-semibold">
//               ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
//             </span>
//           </div>

//           <p className="text-sm text-gray-600 mb-4">
//             Inclusive of all taxes. Shipping calculated at checkout.
//           </p>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
//             <div className="flex gap-2">
//               {product.colors.map((color, idx) => (
//                 <div key={idx} className="w-5 h-5 border border-gray-400 rounded-full bg-white"></div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6 text-orange-600 font-semibold flex items-center gap-2">
//             <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
//             Hurry Up! Last Few Items in stock
//           </div>

//           <div className="flex items-center gap-3 mb-6">
//             <input
//               type="number"
//               min="1"
//               defaultValue="1"
//               className="w-16 px-3 py-2 border rounded-md"
//             />
//             <button
//               onClick={() =>
//                 addToCart({
//                   ...product,
//                   size: product.sizes[0],
//                   color: product.colors[0],
//                   quantity: 1,
//                 })
//               }
//               className="bg-amber-900 text-white px-6 py-3 rounded-md hover:bg-amber-800"
//             >
//               ADD TO CART
//             </button>
//           </div>

//           <ProductTabs  product={product}/>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// 'use client';

// import { useParams } from 'next/navigation';
// import { productsData } from "@/components/data/productsData";
// import Header from "@/components/header";
// import Footer from "@/components/footer";

// export default function ProductDetailPage() {
//   const { category, id } = useParams();

//   const product = productsData.find(
//     (p) => p.id === parseInt(id as string) && p.category === category
//   );

//   if (!product) return <div className="p-10 text-center">Product not found.</div>;

//   return (
//     <div>
//       <Header />
//       <div className="max-w-7xl mx-auto px-4 py-10">
//         <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
//         <p className="text-lg">₹{product.price}</p>
//         <img src={product.image} alt={product.name} className="w-full max-w-md" />
//         {/* add more details as per your design */}
//       </div>
//       <Footer />
//     </div>
//   );
// }
'use client';

import { useParams } from 'next/navigation';
import { productsData } from "@/components/data/productsData";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import ProductTabs from "@/components/ProductTabs";

export default function ProductDetailPage() {
  const { category, id } = useParams();
  const { addToCart } = useCart();

  const product = productsData.find(
    (p) => p.id === parseInt(id as string) && p.category === category
  );

  const [selectedImage, setSelectedImage] = useState<string>(product?.images && product.images.length > 0 ? product.images[0] : product?.image || '');

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Product Images */}
        <div>
          {/* Big image */}
          <div className="relative h-[400px] w-full aspect-square mb-4 overflow-hidden bg-gray-100">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2">
            {(product.images && product.images.length > 0 ? product.images : [product.image]).map((img, i) => (
              <div
                key={i}
                className={`relative w-20 h-20 cursor-pointer border ${
                  selectedImage === img ? 'border-amber-800' : 'border-gray-300'
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
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            {product.name}
          </h1>
          <p className="text-sm text-amber-900 font-medium mb-3">By Swarattan</p>

          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xl font-bold text-gray-900">
              ₹{product.price}
            </span>
            <span className="line-through text-gray-500 text-sm">
              ₹{product.originalPrice}
            </span>
            <span className="text-sm text-green-600 font-semibold">
              ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Inclusive of all taxes. Shipping calculated at checkout.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
            <div className="flex gap-2">
              {product.colors.map((color, idx) => (
                <div key={idx} className="w-5 h-5 border border-gray-400 rounded-full bg-white"></div>
              ))}
            </div>
          </div>

          <div className="mb-6 text-orange-600 font-semibold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
            Hurry Up! Last Few Items in stock
          </div>

          <div className="flex items-center gap-3 mb-6">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 px-3 py-2 border rounded-md"
            />
            <button
              onClick={() =>
                addToCart({
                  ...product,
                  size: product.sizes[0],
                  color: product.colors[0],
                  quantity: 1,
                })
              }
              className="bg-amber-900 text-white px-6 py-3 rounded-md hover:bg-amber-800"
            >
              ADD TO CART
            </button>
          </div>

          <ProductTabs product={product} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
