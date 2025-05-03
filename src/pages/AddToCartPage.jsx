import React, { useState } from "react";
import AddToCartItems from "../componenets/AddToCartItems";
import PriceDetails from "../componenets/PriceDetails";
import { useSelector } from "react-redux";
import EmptyCart from "../componenets/EmptyCart";

function AddToCartPage() {
  const [quantity, setQuantity] = useState(1);
  const cartItemsId = useSelector((state) => state.cartItemsId);

  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 py-6 max-w-[1440px] mx-auto">
      {/* Cart Items section */}
      {cartItemsId.length > 0 ? (
        <div className="w-full lg:w-2/3">
          <AddToCartItems quantity={quantity} setQuantity={setQuantity} />
        </div>
      ) : (
        <EmptyCart />
      )}

      {/* Price Details section */}
      {cartItemsId.length > 0 ? (
            <div className="w-full lg:w-1/3">
            <PriceDetails quantity={quantity} />
          </div>
      ) : (
        null
      )}
 
    </div>
  );
}

export default AddToCartPage;
