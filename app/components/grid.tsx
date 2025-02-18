// "use client";
// import { useEffect, useState } from "react";
// import AnimatedProduct from "./showcase";

// interface Product {
//   _id: string;
//   name: string;
//   shortDescription: string;
//   price: number;
//   mainImage?: { asset: { _ref: string } };
//   sideImage?: { asset: { _ref: string } };
//   backImage?: { asset: { _ref: string } };
// }

// /**
//  * The project ID for the Sanity content platform.
//  * This ID is used to identify the specific project within Sanity.
//  * 
//  * @constant {string}
//  */
// const sanityProjectId ="birgj4m8"
// const sanityDataset = 'production';
// const sanityApiVersion = 'v2025-02-12';

// function generateImageUrl(ref: string) {
//   return ref.replace("image-", `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/`).replace("-jpg", ".jpg");
// }

// export default function ProductsGrid() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           `https://${sanityProjectId}.api.sanity.io/${sanityApiVersion}/data/query/${sanityDataset}?query=` +
//             encodeURIComponent('*[_type == "product"]')
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setProducts(data.result);
//       } catch (err: unknown) {
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

//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <AnimatedProduct
//             key={product._id}
//             product={{
//               name: product.name,
//               shortDescription: product.shortDescription,
//               price: product.price,
//               images: [
//                 generateImageUrl(product.mainImage?.asset._ref || ""),
//                 generateImageUrl(product.sideImage?.asset._ref || ""),
//                 generateImageUrl(product.backImage?.asset._ref || ""),
//               ],
//             }}
//           />
//         ))}
//       </div> */
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//   {products.map((product) => {
//     const images = [
//       product.mainImage?.asset?._ref ? generateImageUrl(product.mainImage.asset._ref) : null,
//       product.sideImage?.asset?._ref ? generateImageUrl(product.sideImage.asset._ref) : null,
//       product.backImage?.asset?._ref ? generateImageUrl(product.backImage.asset._ref) : null,
//     ].filter((img) => img !== null); // Remove null values

//     return images.length > 0 ? (
//       <AnimatedProduct
//         key={product._id}
//         product={{
//           name: product.name,
//           shortDescription: product.shortDescription,
//           price: product.price,
//           images, // Ensure it is always an array
//         }}
//       />
//     ) : null; // If no images, don't render the product
//   })}
// </div>

      
//       }
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import ProductCard from "./productcard";

interface Product {
  _id: string;
  name: string;
  shortDescription: string;
  price: number;
  mainImage?: { asset: { _ref: string } };
  sideImage?: { asset: { _ref: string } };
  backImage?: { asset: { _ref: string } };
}

const sanityProjectId = "birgj4m8";
const sanityDataset = "production";
const sanityApiVersion = "v2025-02-12";

// Function to generate a Sanity image URL
function generateImageUrl(ref: string) {
  return ref ? ref.replace("image-", `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/`).replace("-jpg", ".jpg") : "";
}

export default function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://${sanityProjectId}.api.sanity.io/${sanityApiVersion}/data/query/${sanityDataset}?query=` +
            encodeURIComponent('*[_type == "product"]')
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.result);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (products.length === 0) return <p className="text-gray-500 text-center mt-10">Loading products...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Leather Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const images = [
            generateImageUrl(product.mainImage?.asset?._ref || ""),
            generateImageUrl(product.sideImage?.asset?._ref || ""),
            generateImageUrl(product.backImage?.asset?._ref || ""),
          ].filter((img) => img !== ""); // Remove empty image URLs

          return images.length > 0 ? (
            <ProductCard
              key={product._id}
              product={{
                name: product.name,
                shortDescription: product.shortDescription,
                price: product.price,
                images, // Ensures images array is valid
              }}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
