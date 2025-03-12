import React, { useContext, useState } from "react";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import { ProductContext } from "../ContextAPI/ProductsContext";
import EmptyCart from "./EmptyCart";

function AddToCart() {
  
  const { totalCart, addToCart } = useContext(ProductContext);

  return (
    <>
      <div className="m-20 p-4 grid place-items-center  bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <center className="p-3 mb-5 text-lg font-semibold border shadow-lg w-4/5 max-w-2xl mx-auto rounded-2xl bg-white">
        My Cart ( {totalCart} )
      </center>
        {addToCart?.map((id) => (
          <Cart key={id} id={id} />))}
        {totalCart > 0 ? <ProductDetails /> : <EmptyCart />}
      </div>
    </>
  );
}

export default AddToCart;
