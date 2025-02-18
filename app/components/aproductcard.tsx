// components/ProductCard.tsx
import React, { useState } from 'react';

// Define the shape of a Product. This type is shared with the page.
export type Product = {
  title: string;
  description: string;
  price: number;
  images: string[]; // Array of image URLs
  slug: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // State to manage whether the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to store the currently active image URL for zoom view
  const [activeImage, setActiveImage] = useState('');

  // Function to handle image clicks: opens the modal and sets the active image.
  const handleImageClick = (imageUrl: string) => {
    setActiveImage(imageUrl);
    setIsModalOpen(true);
  };

  return (
    <div className="relative bg-white p-4 rounded shadow-md">
      {/* Overlapping Images Section */}
      <div className="relative h-64">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.title} image ${index + 1}`}
            // Absolute positioning creates the overlapping effect.
            // The Tailwind classes adjust position and z-index.
            className={`absolute transition-transform duration-300 hover:scale-105 cursor-pointer 
              ${
                index === 0
                  ? 'top-0 left-0 z-30'
                  : index === 1
                  ? 'top-4 left-4 z-20'
                  : 'top-8 left-8 z-10'
              }`}
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      {/* Product Details Section */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-indigo-600 font-semibold">${product.price.toFixed(2)}</p>
      </div>

      {/* Modal for Full-Size Image */}
      {isModalOpen && (
        <div
          // This modal covers the entire viewport.
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          // Clicking anywhere on the modal closes it.
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={activeImage}
            alt="Zoomed view"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
