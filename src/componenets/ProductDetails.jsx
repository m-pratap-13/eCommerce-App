import React from "react";

function ProductDetails({product}) {
  return (
    <>
      <h2 className="text-2xl font-semibold">{product.title}</h2>
      <div className="flex items-center mt-2">
        <span className="text-xl font-bold text-black">
          {" "}
          $
          {(
            product.price -
            (product.price * Math.round(product.discountPercentage)) / 100
          ).toFixed(2)}
        </span>
        <span className="text-gray-400 line-through ml-2">
          ${product.price}
        </span>
        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 ml-2 rounded">
          {Math.round(product.discountPercentage)}% Off
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Brand : </span> {product.brand}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Description:</span>{" "}
          {product.description}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Rating : </span> {product.rating}/5
        </p>
      </div>
    </>
  );
}

export default ProductDetails;
