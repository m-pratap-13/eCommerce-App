import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WishlistCard from "./WishlistCard";

function WishlistItems() {
  const [wishlistData, setWishlistData] = useState([]);
  const wishlistItemsId =
    useSelector((state) => state.wishlistId.wishlistItemsId) || [];
  useEffect(() => {
    let allWishlistProducts = [];

    Promise.all(
      wishlistItemsId.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            allWishlistProducts = allWishlistProducts.concat(data);
          })
      )
    ).then(() => {
      setWishlistData(allWishlistProducts);
    });
  }, [wishlistItemsId]);

  return (
    <div className="p-10 ">
      {wishlistData?.map((product) => (
        <WishlistCard
          key={product.id}
          id={product.id}
          title={product.title}
          priceAfterDiscount={(
            product.price -
            (product.price * Math.round(product.discountPercentage)) / 100
          ).toFixed(2)}
          price={product.price}
          discountPercentage={Math.round(product.discountPercentage)}
          stock={product.stock}
          images={product.images?.[0]}
          rating={product.rating}
          description={product.description}
          warranty={product.warrantyInformation}
        />
      ))}
    </div>
  );
}

export default WishlistItems;
