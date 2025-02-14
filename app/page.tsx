"use client"; // Ensure client-side rendering
// import {sanityClient} from "./lib/sanity";
// import { useEffect, useState } from "react";
//import Image from "next/image";
import Link from "next/link";
//import { AnimatedTestimonials } from "./components/animated-testimonials";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Leather Studio</h1>
      <p className="text-lg text-gray-600 mt-2">Explore our premium leather products.</p>
      <Link href="all-products">
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg">
          View All Products
        </button>
      </Link>
      {/* <AnimatedProductShowcase /> */}
    </div>
  );
}



