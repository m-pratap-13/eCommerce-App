import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCard from "../componenets/ShopingCard";

function AddToCartItems({ quantity, setQuantity }) {
  const [cartData, setCartData] = useState([]);
  const cartItemsId = useSelector((state) => state.cartItemsId);
  useEffect(() => {
    let allAddTocartsProducts = [];

    Promise.all(
      cartItemsId.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            allAddTocartsProducts = allAddTocartsProducts.concat(data);
          })
      )
    ).then(() => {
      setCartData(allAddTocartsProducts);
    });
  }, [cartItemsId]);

  return (
    <div>
      {cartData?.map((product) => (
        <ShoppingCard
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
          quantity={quantity}
          setQuantity={setQuantity}
        />
      ))}
    </div>
  );
}

export default AddToCartItems;
