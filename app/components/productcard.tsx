"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


interface Product {
  name: string;
  shortDescription: string;
  price: number;
  images: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // Handle image navigation
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <motion.div
    //   className="relative text-white p-6 rounded-xl shadow-lg overflow-hidden max-w-md mx-auto"
      className="relative bg-black text-white p-6 rounded-xl shadow-lg overflow-hidden max-w-md mx-auto min-h-[200px] min-w-[350px] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" 
    
      }}
//       className="relative bg-black text-white p-6 rounded-xl shadow-lg overflow-hidden max-w-md mx-auto cursor-pointer"
//   initial={{ opacity: 0, y: 50 }}
//   animate={{ opacity: 1, y: 0 }}
//   whileHover={{
//     scale: 1.05,
//     rotateX: 5,  // 🔥 Adds slight 3D tilt
//     rotateY: 5,
//   }}
//   transition={{ duration: 0.3 }}
    >
      {/* Animated Image Stack */}
      <div className="relative w-full h-64">
        {product.images.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden ${
              index === currentIndex ? "z-10" : "z-0"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={index === currentIndex ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            
            transition={{ duration: 0.1 }}
            whileHover={{ 
                scale: 1.05, 
                rotateX: 5,  // 🔥 Adds slight 3D tilt
                rotateY: 5,

            
            }}
          >
            <Image
              src={img}
              alt={`Product Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg cursor-pointer"
              onClick={() => setZoomed(true)}
            />
          </motion.div>
        ))}
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-400">{product.shortDescription}</p>
        <p className="text-indigo-400 font-semibold mt-2">₹{product.price ? product.price.toFixed(2): "Need To be Updated"}</p>
      </div>
        {product.images.length > 1 && (
        <div className="absolute bottom-4 right-6 flex space-x-4">
          <button onClick={prevImage} className="p-2 bg-gray-800 rounded-full">⬅️</button>
          <button onClick={nextImage} className="p-2 bg-gray-800 rounded-full">➡️</button>
        </div>
      )}

      {/* Zoomed Image Modal */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
          >
            <motion.img
              src={product.images[currentIndex]}
              alt="Zoomed Product"
              className="max-w-full max-h-full"
              //initial={{ scale: 0.8 }}
              animate={{ opacity: 1, y: 0 }}
              //exit={{ scale: 0.8 }}
              //initial={{ opacity: 0, y: 50 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,  // 🔥 Adds slight 3D tilt
                rotateY: 5,
            }}
             transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

  