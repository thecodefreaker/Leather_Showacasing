"use client";
import { useState } from "react";
import Image from "next/image";
//import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
//import { motion, AnimatePresence } from "framer-motion";
//import Image from "next/image";
//import { useEffect} from "react";
//import { generateImageUrl } from "../lib/util";

interface Product {
  name: string;
  shortDescription: string;
  price: number;
  images: string[]; // Array of images (main, side, back)
}

export default function AnimatedProduct({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="border rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:scale-105">
      <div className="relative">
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full"
        >
          ◀
        </button>
        
        <Image
          src={product.images[currentImageIndex]}
          alt={product.name}
          width={300}
          height={200}
          className="rounded-lg w-auto h-auto"
        />

        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full"
        >
          ▶
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-600">{product.shortDescription}</p>
      <p className="text-lg font-bold mt-2">Price: ₹{product.price}</p>
    </div>
  );
}
// Compare this snippet from front/leather/app/components/animated-testimonials.tsx: