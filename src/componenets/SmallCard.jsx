import React from "react";

function SmallCard({ id, title, discountPercentage, images }) {
  return (
    <div
      key={id}
      className="mb-3 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] bg-white rounded-md text-center p-2 shadow-sm hover:shadow-md transition"
    >
      <img
        src={images}
        alt={title}
        className="w-20 h-20 mx-auto object-contain"
      />
      <p className="mt-2 text-sm font-medium">{title}</p>
      <p className="text-xs text-gray-500">{discountPercentage}% off</p>
    </div>
  );
}

export default SmallCard;
