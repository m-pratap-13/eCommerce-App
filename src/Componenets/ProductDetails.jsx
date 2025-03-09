import React from "react";

function ProductDetails() {
  return (
    <>
      <div className="mt-6 p-4 bg-gray-50 w-150 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">PRICE DETAILS</h3>
        <div className="mt-2 space-y-2 text-gray-600">
          <div className="flex justify-between">
            <span>Price (1 item)</span>
            <span>₹1,999</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">- ₹1,740</span>
          </div>
          <div className="flex justify-between">
            <span>Coupons for you</span>
            <span className="text-green-600">- ₹20</span>
          </div>
          <div className="flex justify-between">
            <span>Platform Fee</span>
            <span>₹3</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600 line-through">₹40</span>{" "}
            <span className="text-green-600">Free</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total Amount</span>
            <span>₹242</span>
          </div>
          <p className="text-green-600 font-medium text-center mt-2">
            You will save ₹1,757 on this order
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
