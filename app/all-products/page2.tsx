// "use client"; // Ensure client-side rendering
// // import {sanityClient } from "../lib/sanity";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// // import Link from "next/link";

// interface Product {
//   _id: string;
//   name: string;
//   shortDescription: string;
//   price: number;
//   mainImage?: { asset: { _ref: string } };
//   sideImage?: { asset: { _ref: string } };
//   backImage?: { asset: { _ref: string } };
// }

// const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// const generateImageUrl = (ref: string) =>
//   ref.replace("image-", `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/`).replace("-jpg", ".jpg");

// export default function HomePage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           `https://${sanityProjectId}.api.sanity.io/${sanityApiVersion}/data/query/${sanityDataset}?query=` +
//           encodeURIComponent('*[_type == "product"]')
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setProducts(data.result);
//       } catch (err: any) {
//         console.error("Failed to fetch products:", err);
//         setError("Failed to load products. Please try again later.");
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (error) {
//     return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
//   }

//   if (products.length === 0) {
//     return <p className="text-gray-500 text-center mt-10">Loading products...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-8">Our Leather Products</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="border rounded-lg shadow-lg p-4">
//             {/* Display Main Image */}
//             {product.mainImage && (
//               <Image
//                 src={generateImageUrl(product.mainImage.asset._ref)}
//                 alt={product.name}
//                 width={300}
//                 height={200}
//                 priority={true}
//                 className="rounded-lg w-auto h-auto"
//               />
//             )}

//             {/* Product Info */}
//             <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">{product.shortDescription}</p>
//             <p className="text-lg font-bold mt-2">Price: ${product.price}</p>

//             {/* Display Side & Back Images */}
//             <div className="flex space-x-2 mt-4">
//               {product.sideImage && (
//                 <Image
//                   src={generateImageUrl(product.sideImage.asset._ref)}
//                   alt="Side view"
//                   width={80}
//                   height={60}
//                   priority={true}
//                   className="rounded-md w-auto h-auto"
//                 />
//               )}
//               {product.backImage && (
//                 <Image
//                   src={generateImageUrl(product.backImage.asset._ref)}
//                   alt="Back view"
//                   width={80}
//                   height={60}
//                   priority={true}
//                   className="rounded-md w-auto h-auto"
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }