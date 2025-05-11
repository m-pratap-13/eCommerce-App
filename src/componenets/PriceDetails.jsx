import { useEffect, useState } from "react";
import { FaTag, FaTruck, FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import OrderBtn from "./OrderBtn";

export default function PriceDetails({ quantity }) {
  const [cartPrice, setCartPrice] = useState([]);
  const [off, setOff] = useState([]);
  const PLAT_FORM_FEE = 1;
  const cartItemsId = useSelector((state) => state.cartId.cartItemsId) || [];
  useEffect(() => {
    let allAddTocartsProductsPrice = [];
    let discount = [];

    Promise.all(
      cartItemsId.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            allAddTocartsProductsPrice = allAddTocartsProductsPrice.concat(
              data.price * quantity
            );

            discount = discount.concat(
              (data.price * quantity * Math.round(data.discountPercentage)) /
                100
            );
          })
      )
    ).then(() => {
      setCartPrice(allAddTocartsProductsPrice);
      setOff(discount);
    });
  }, [cartItemsId, quantity]);

  return (
    <div className="w-full border border-amber-100 rounded-md shadow-sm p-4 bg-white text-sm md:text-base">
      <h2 className="text-gray-500 font-semibold border-b pb-2 mb-3">
        PRICE DETAILS
      </h2>

      <div className="flex justify-between mb-2">
        <span className="flex items-center gap-1">
          <FaTag className="text-gray-400" /> Price (
          {cartItemsId.length > 1
            ? `${cartItemsId.length} items`
            : `${cartItemsId.length} item`}{" "}
          )
        </span>
        <span>
          $ {cartPrice.reduce((sum, current) => sum + current, 0).toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between mb-2">
        <span className="flex items-center gap-1">
          <FaTag className="text-gray-400" /> Discount
        </span>
        <span className="text-green-600">
          $ {off.reduce((sum, current) => sum + current, 0).toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between mb-2">
        <span className="flex items-center gap-1">
          <FaRupeeSign className="text-gray-400" /> Platform Fee
        </span>
        <span>$ {PLAT_FORM_FEE}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span className="flex items-center gap-1">
          <FaTruck className="text-gray-400" /> Delivery Charges
        </span>
        <span className="text-green-600">Free</span>
      </div>

      <hr className="my-3 border-dashed" />

      <div className="flex justify-between font-semibold text-base">
        <span>Total Amount</span>
        <span>
          ${" "}
          {(
            cartPrice.reduce((sum, current) => sum + current, 0).toFixed(2) -
            off.reduce((sum, current) => sum + current, 0).toFixed(2)
          ).toFixed(2)}
        </span>
      </div>

      <p className="text-green-600 text-sm mt-2 font-medium">
        You will save $ {(off.reduce((sum, current) => sum + current, 0).toFixed(2)-PLAT_FORM_FEE).toFixed(2)} on this order
      </p>
      <div className="w-full mt-4">
        <OrderBtn/>
      </div>
    </div>
  );
}
