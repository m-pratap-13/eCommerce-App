import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../features/addToCartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addToWishlist, removeToWishlist } from "../features/addToWishlistSlice";

export default function ShoppingCard({
  id,
  title,
  price,
  priceAfterDiscount,
  stock,
  images,
  warranty,
  quantity,
  setQuantity,
}) {
  const totalStock = Array.from({ length: stock }, (_, i) => i + 1);
    const dispatch = useDispatch();
  const isAdded = useSelector((state) =>
    (state.wishlistId.wishlistItemsId || []).includes(id)
  );

  const handleWishlist = (productId) => {
    if (isAdded) {
      dispatch(removeToWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }
  };
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between border border-amber-100 p-6 gap-4 lg:gap-0 w-full">
      {/* Left Section: Image + Info */}
      <Link to={`/product/${id}/${title}`} className="flex items-center gap-4 w-full lg:w-1/2">
        <img
          src={images}
          alt={title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-base font-medium text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{warranty}</p>
        </div>
      </Link>

      {/* Middle Section: Quantity and Remove */}
      <div className="flex flex-row items-center justify-between sm:justify-start sm:gap-6 w-full sm:w-auto">
        <select
          className="border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 focus:outline-none"
          onChange={(e) => setQuantity(e.target.value)}
        >
          {totalStock.map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <button
          className={`ml-4 text-sm  ${isAdded?"text-red-500":"text-purple-600"} hover:underline flex items-center gap-1 cursor-pointer`}
          onClick={() => handleWishlist(id)}
        >
          <FaHeart className={`text-xs ${isAdded?"text-red-500":""}`} />Wishlist
        </button>
        <button
          className="ml-4 text-sm text-purple-600 hover:underline flex items-center gap-1 cursor-pointer"
          onClick={() => dispatch(removeToCart(id))}
        >
          <FaTrashAlt className="text-xs" /> Remove
        </button>
      </div>
         <div className="flex items-center mt-2 flex-col">
            <span className="text-xl font-bold text-black">
              {" "}
              $
              {(priceAfterDiscount*quantity).toFixed(2)}
            </span>
            <span className="text-gray-400 line-through ml-2">
              ${(price*quantity).toFixed(2)}
            </span>
          </div>
    </div>
  );
}
