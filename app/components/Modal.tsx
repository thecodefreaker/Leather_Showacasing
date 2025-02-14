import { useState } from "react";
import Image from "next/image";

interface ModalProps {
  images: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <button
          className="absolute top-0 right-0 m-4 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <Image
          src={images[currentImageIndex]}
          alt="Product Image"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <div className="flex justify-between mt-4">
          <button
            className="text-white text-2xl"
            onClick={handlePrev}
          >
            &larr;
          </button>
          <button
            className="text-white text-2xl"
            onClick={handleNext}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;