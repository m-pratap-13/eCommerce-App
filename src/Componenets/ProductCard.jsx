import React, { useEffect, useState,useContext } from "react";
import { Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ContextAPI/ProductsContext";

function ProductCard({ product }) {

 const { handleAddToCart,handleAddToWishlist} = useContext(ProductContext);
  return (
    <>
      <div className=" bg-white m-1 p-6 rounded-2xl shadow-xl w-80 transition-transform transform hover:scale-105">
        <div className="relative">
          <img
            src={product.images[0]}
            alt="Mollis Nunc"
            className="w-full rounded-lg h-48 object-contain"
          />
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer" onClick={() => handleAddToWishlist(product.id)}>
              <Heart className="w-5 h-5" />
            </button>
            <Link
              to={`/product/${product.id}/${product.title}`}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
            >
              <Eye className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <p className="text-gray-500 text-sm">{product.description}</p>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
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
         
          </div>
          <button
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            onClick={() => handleAddToCart(product.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
