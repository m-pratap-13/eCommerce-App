import { useState } from "react";
import { FaExpand, FaHeart } from "react-icons/fa";
import WishlistBtn from "./WishlistBtn";

export default function PreviewImage({ product }) {
  const [imgIdx, setImgIdx] = useState(0);
  const handleImage = (idx) => {
    setImgIdx(idx);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Image List */}
      <div className="flex md:flex-col gap-2">
        {product.images?.map((img, idx) => (
          <button
            className="border-1 border-black focus:border-blue-500 rounded p-1"
            key={idx}
            onClick={() => handleImage(idx)}
          >
            <img
              src={img}
              alt={product.title}
              className="w-20 h-28 object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Main Image Display */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative">
          <WishlistBtn product={product} />
          <img
            src={product.images?.[imgIdx]}
            alt="Main"
            className="h-100 rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
