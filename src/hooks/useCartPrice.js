import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useCartPrice(quantity, allProductId) {
  const [cartPrice, setCartPrice] = useState([]);
  const [off, setOff] = useState([]);
  useEffect(() => {
    let allCartPrice = [];
    let discount = [];

    Promise.all(
      allProductId.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            allCartPrice = allCartPrice.concat(data.price * quantity);

            discount = discount.concat(
              (data.price * quantity * Math.round(data.discountPercentage)) /
                100
            );
          })
      )
    ).then(() => {
      setCartPrice(allCartPrice);
      setOff(discount);
    });
  }, [allProductId, quantity]);
  return { cartPrice, off };
}

export default useCartPrice;
