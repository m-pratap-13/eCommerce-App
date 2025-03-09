import React, { useContext } from "react";
import Wishlist from "./Wishlist";
import { ProductContext } from "../ContextAPI/ProductsContext";
import EmptyWishlist from "./EmptyWishlist";
function AddToWishlist() {
  const { addToWishlist,totalWishlist } = useContext(ProductContext);
  return (
    <div className="mt-20 mb-5">
      <center className="p-3 text-lg font-semibold border shadow-lg w-4/5 max-w-2xl mx-auto rounded-2xl bg-white">
        My Wishlist ({totalWishlist})
      </center>
        {totalWishlist > 0 ? addToWishlist.map((id)=><Wishlist key={id} id={id}/>) :<EmptyWishlist/>}
    </div>
  );
}

export default AddToWishlist;
