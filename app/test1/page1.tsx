// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { sanityClient, urlFor } from "../lib/sanity";

// // 🔹 Fetch products in a Client Component
// async function fetchProducts() {
//   const query = `*[_type == "product"] {
//     _id,
//     name,
//     price,
//     sku,
//     shortDescription,
//     "mainImage": mainImage.asset->_ref,
//     "sideImage": sideImage.asset->_ref,
//     "backImage": backImage.asset->_ref
//   }`;

//   const products = await sanityClient.fetch(query);

//   return products.map((product: any) => ({
//     ...product,
//     images: [
//       product.mainImage ? urlFor(product.mainImage).width(400).height(400).url() : null,
//       product.sideImage ? urlFor(product.sideImage).width(400).height(400).url() : null,
//       product.backImage ? urlFor(product.backImage).width(400).height(400).url() : null,
//     ].filter(Boolean), // Remove null values
//   }));
// }

// // 🔹 Animated Image Component (Cycles through images)
// function AnimatedProductImage({ images }: { images: string[] }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000); // Change image every 2 seconds
//     return () => clearInterval(interval);
//   }, [images]);

//   return (
//     <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
//       {images.map((image, index) => (
//         <Image
//           key={index}
//           src={image}
//           alt={`Product Image ${index + 1}`}
//           width={400}
//           height={400}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             index === currentIndex ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}
//     </div>
//   );
// }

// // 🔹 Main Component
// export default function AllProductsPage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts().then((data) => {
//       setProducts(data);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) return <p className="text-center text-xl">Loading products...</p>;

//   return (
//     <div className="container mx-auto px-6 py-10">
//       <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

//       {/* Grid Layout for Products */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product: any) => (
//           <div key={product._id} className="border p-4 rounded-lg shadow-md">
//             {/* Animated Product Image */}
//             <AnimatedProductImage images={product.images} />

//             {/* Product Details */}
//             <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
//             <p className="text-gray-500">{product.shortDescription}</p>
//             <p className="text-lg font-bold mt-2">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
