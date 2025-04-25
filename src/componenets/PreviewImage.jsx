import { useState } from "react";
import { FaExpand } from "react-icons/fa"; // Example icon

export default function PreviewImage({ product }) {
  const [imgIdx, setImgIdx] = useState(0);
  const handleImage = (idx) => {
    // console.log(idx)
    setImgIdx(idx)
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
            />
          </button>
        ))}
      </div>

      {/* Main Image Display */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative">
          <img
            src={product.images?.[imgIdx]}
            alt="Main"
            className="h-100 rounded-lg shadow-md"
          />
          <FaExpand className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-1 rounded-full text-xl" />
        </div>
      </div>
    </div>
  );
}
