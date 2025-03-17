import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductContext } from "../../ContextAPI/ProductsContext";

function SearchCard({product}) {
  const { handleAddToCart,handleAddToWishlist} = useContext(ProductContext);
  return (
    <>
      <div className="max-w-xs w-100 bg-white border rounded-xl shadow-md overflow-hidden relative">
             {/* Wishlist Icon */}
             <button
               className="absolute top-2 right-2 text-gray-400 p-2 rounded-full shadow-md hover:text-red-500 transition cursor-pointer"
               onClick={() => handleAddToWishlist(product.id)}
             >
               <AiOutlineHeart size={22} />
             </button>
     
             {/* Product Image */}
             <Link
               to={`/product/${product.id}/${product.title}`}
               className="w-full h-40 flex justify-center items-center bg-gray-100 cursor-pointer"
             >
               <img
                 src={product.images[0]}
                 alt="Apple Wireless AirPods"
                 className="h-full object-contain"
               />
             </Link>
     
             {/* Product Details */}
             <div className="p-4">
               <h3 className="text-gray-800 font-medium text-sm">{product.title}</h3>
     
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
                 <span className="bg-red-100 text-red-600 text-xs px-2 py-1 ml-2 rounded">
                   {Math.round(product.discountPercentage)}% Off
                 </span>
               </div>
     
               <p className="text-red-500 text-xs mt-1">{product.stock} left</p>
     
               {/* Add to Cart Button */}
               <button
                 className="mt-3 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
                 onClick={() => handleAddToCart(product.id)}
               >
                 ADD TO CART
               </button>
             </div>
           </div>
    </>
  );
}

export default SearchCard;
