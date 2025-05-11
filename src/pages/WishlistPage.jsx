import React from "react";
import WishlistItems from "../componenets/WishlistItems";
import { useSelector } from "react-redux";
import EmptyCart from "../componenets/EmptyCart";
import { FaHeart } from "react-icons/fa";

function WishlistPage() {
  const wishlistItemsId = useSelector((state) => state.wishlistId.wishlistItemsId) || [];
  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 py-6 max-w-[1440px] mx-auto">
      {/* Wishlist Items section */}
      {wishlistItemsId.length > 0 ? (
        <div className="w-full lg:w-3/3">
          <WishlistItems />
        </div>
      ) : (
        <EmptyCart
          icon={<FaHeart size={50} className="text-gray-400" />}
          text="WISHLIST"
        />
      )}
    </div>
  );
}

export default WishlistPage;
