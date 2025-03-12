import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ContextAPI/ProductsContext";

function ProductDetails() {
  const { totalCart, addToCart } = useContext(ProductContext);
  const [totalPrice, setTotalprice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [platformFee,setPlatformFee] =useState(0.5)

  useEffect(() => {
    addToCart.forEach((itemId) => {
      cartProductData(itemId);
    });

    async function cartProductData(itemId) {
      const res = await fetch(`https://dummyjson.com/products/${itemId}`);
      const data = await res.json();
      setTotalprice((price) => price + data.price);
      setTotalDiscount(
        (discount) =>
          discount + (data.price * Math.round(data.discountPercentage)) / 100
      );
    }
  }, [addToCart]);

  return (
    <>
      <div className="mt-6 p-4 bg-gray-50 w-150 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">PRICE DETAILS</h3>
        <div className="mt-2 space-y-2 text-gray-600">
          <div className="flex justify-between">
            <span>Price ( {totalCart} item )</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">
              - ${totalDiscount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Platform Fee</span>
            <span>${platformFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600 line-through">$1</span>{" "}
            <span className="text-green-600">Free</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total Amount</span>
            <span>${(totalPrice-totalDiscount+platformFee).toFixed(2)}</span>
          </div>
          <p className="text-green-600 font-medium text-center mt-2">
            You will save ${totalDiscount.toFixed(2)} on this order
          </p>
        </div>
        <div className="mt-4">
          <button className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600">
            ORDER
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
