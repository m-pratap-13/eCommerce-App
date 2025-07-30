import React from "react";
import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
import OrderBtn from "./OrderBtn";
import WishlistBtn from "./WishlistBtn";

function Card({
  product,
  id,
  title,
  priceAfterDiscount,
  price,
  discountPercentage,
  stock,
  images,
}) {
  return (
    <div>
      {" "}
      <div className="max-w-xs w-100 bg-white border rounded-xl shadow-md overflow-hidden relative">
        {/* Wishlist Icon */}
        <WishlistBtn product={product} />

        {/* Product Image */}
        <Link
          to={`/product/${id}/${title}`}
          className="w-full h-40 flex justify-center items-center bg-gray-100 cursor-pointer"
        >
          <img
            src={images}
            alt={title}
            className="h-full object-contain"
            loading="lazy"
          />
        </Link>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-gray-800 font-medium text-sm">{title}</h3>

          <div className="flex items-center mt-2">
            <span className="text-xl font-bold text-black">
              {" "}
              ${priceAfterDiscount}
            </span>
            <span className="text-gray-400 line-through ml-2">${price}</span>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 ml-2 rounded">
              {Math.round(discountPercentage)}% Off
            </span>
          </div>

          <p className="text-red-500 text-xs mt-1">{stock} left</p>

          {/* Add to Cart Button */}
          <div className="flex gap-2">
            <AddToCartBtn product={product} />
            <OrderBtn width="w-[28%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
