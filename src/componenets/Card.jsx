import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card({id,title,priceAfterDiscount,price,discountPercentage,stock,images}) {
  return (
    <div>
      {" "}
      <div className="max-w-xs w-100 bg-white border rounded-xl shadow-md overflow-hidden relative">
        {/* Wishlist Icon */}
        <button
          className="absolute top-2 right-2 text-gray-400 p-2 rounded-full shadow-md hover:text-red-500 transition cursor-pointer"
          
        >
          <AiOutlineHeart size={22} />
        </button>

        {/* Product Image */}
        <Link
          to={`/product/${id}/${title}`}
          className="w-full h-40 flex justify-center items-center bg-gray-100 cursor-pointer"
        >
          <img
            src={images}
            alt={title}
            className="h-full object-contain"
          />
        </Link>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-gray-800 font-medium text-sm">{title}</h3>

          <div className="flex items-center mt-2">
            <span className="text-xl font-bold text-black">
              {" "}
              $
              {priceAfterDiscount}
            </span>
            <span className="text-gray-400 line-through ml-2">
              ${price}
            </span>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 ml-2 rounded">
              {Math.round(discountPercentage)}% Off
            </span>
          </div>

          <p className="text-red-500 text-xs mt-1">{stock} left</p>

          {/* Add to Cart Button */}
          <button
            className="mt-3 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
            // onClick={() => handleAddToCart(product.id)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
