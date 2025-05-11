import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeToWishlist } from "../features/addToWishlistSlice";
import { FaHeart } from "react-icons/fa";

function WishlistBtn({ product }) {
  const dispatch = useDispatch();

  const isAdded = useSelector((state) =>
    (state.wishlistId.wishlistItemsId || []).includes(product.id)
  );

  const handleWishlist = (productId) => {
    if (isAdded) {
      dispatch(removeToWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }
  };
  return (
    <button
      className={`absolute top-2 right-2 p-2 rounded-full shadow-md ${
        isAdded ? "text-red-500" : "text-gray-400"
      } hover:text-blue-500 transition cursor-pointer`}
      onClick={() => handleWishlist(product.id)}
    >
      <FaHeart size={22} />
    </button>
  );
}

export default WishlistBtn;
