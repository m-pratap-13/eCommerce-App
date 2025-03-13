import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ContextAPI/ProductsContext";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

function Cart({ id }) {
  const [product, setProduct] = useState({});
  const { handleRemoveAddToCart, handleAddToWishlist } =
    useContext(ProductContext);

  useEffect(() => {
    async function cartProductData() {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }
    cartProductData();
  }, []);

  return (
    <div className="mb-10 w-150">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        {/* Product Image */}
        <img
          src={product.images?.[0]}
          alt="Checkered Shirt"
          className="w-28 h-28 object-cover rounded-md border"
        />

        {/* Product Info */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600">
            Category: <span className="font-medium">{product.category}</span>
          </p>
          <p className="text-gray-600">
            Brand:{" "}
            <span className="font-medium">
              {product.brand ? product.brand : "unknown"}
            </span>
          </p>

          {/* Pricing */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-400 line-through text-sm">
              ${product.price}
            </span>
            <span className="text-xl font-bold text-green-600">
              $
              {(
                product.price -
                (product.price * Math.round(product.discountPercentage)) / 100
              ).toFixed(2)}
            </span>
            <span className="text-green-500 text-sm">
              {Math.round(product.discountPercentage)}% Off
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <p className="text-sm text-gray-600">
          Delivery by{" "}
          <span className="font-medium">{product.shippingInformation}</span> |{" "}
          <span className="text-green-600 line-through ">$1 Free</span>
        </p>
        <div className="flex gap-2">
          <button
            className="bg-gray-500 flex justify-center items-center text-white w-20 md:w-20 p-2 rounded hover:cursor-pointer"
            onClick={() => handleAddToWishlist(product.id)}
          >
            <AiOutlineHeart size={22} />
          </button>
          <button
            className="bg-red-500  flex justify-center items-center text-white w-20 md:w-20 p-2 rounded hover:cursor-pointer"
            onClick={() => handleRemoveAddToCart(product.id)}
          >
            <MdDelete size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
