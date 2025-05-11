import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../features/addToCartSlice";

function AddToCartBtn({ product }) {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) =>
    (state.cartId.cartItemsId || []).includes(product.id)
  );

  const handleAddRemoveCart = (productId) => {
    if (isAdded) {
      dispatch(removeToCart(productId));
    } else {
      dispatch(addToCart(productId));
    }
  };
  return (
    <>
      <button
        className={`mt-3 w-[69%] p-5 bg-blue-500 text-white font-semibold py-2 rounded-lg transition cursor-pointer ${
          product.stock > 0
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        } ${
          isAdded
            ? "bg-indigo-400 hover:bg-indigo-500"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        onClick={() => handleAddRemoveCart(product.id)}
        disabled={product.stock === 0}
      >
        {isAdded ? "REMOVE FROM CART" : "ADD TO CART"}
      </button>
    </>
  );
}

export default AddToCartBtn;
