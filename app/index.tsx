// import { sanityClient } from "./lib/sanity";
// import { productQuery } from "./lib/queries";

// export default function Home({ products }: { products: any[] }) {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold text-center mb-6">Our Leather Collection</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="border p-4 rounded-lg shadow-lg">
//             <img src={product.mainImageUrl} alt={product.name} className="w-full h-60 object-cover rounded" />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-500">{product.shortDescription}</p>
//             <p className="text-xl font-bold mt-2">₹{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const products = await sanityClient.fetch(productQuery);
//   return { props: { products } };
// }
