// import { sanityClient } from "../lib/sanity";
// //import { productQuery } from "../../lib/queries";
// import { useRouter } from "next/router";

// export default function ProductPage({ product }: { product: any }) {
//   const router = useRouter();
//   if (router.isFallback) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <div className="flex gap-6">
//         <img src={product.mainImageUrl} alt={product.name} className="w-1/2 rounded-lg" />
//         <div className="flex flex-col gap-4">
//           <p>{product.shortDescription}</p>
//           <p className="text-xl font-bold">₹{product.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const products = await sanityClient.fetch(`*[_type == "product"]{sku}`);
//   const paths = products.map((product: any) => ({ params: { sku: product.sku } }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }: { params: { sku: string } }) {
//   const product = await sanityClient.fetch(`*[_type == "product" && sku == $sku][0]`, { sku: params.sku });

//   return { props: { product } };
// }
