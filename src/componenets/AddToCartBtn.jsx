import React from "react";

function AddToCartBtn() {
  return (
    <>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
        onClick={() => handleAddToCart(product.id)}
      >
        ADD TO CART
      </button>
    </>
  );
}

export default AddToCartBtn;
