import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { ProductContext } from '../ContextAPI/ProductsContext';


function Wishlist({id}) {
const [product, setProduct] = useState({});
const {handleRemoveAddToWishlist }=useContext(ProductContext)

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
    <>
         <div className="m-2 flex flex-col sm:flex-row items-center sm:items-start p-6 border shadow-lg w-4/5 max-w-2xl mx-auto rounded-2xl bg-white">
        <img
          src={product.images?.[0]}
          alt="boAt 100 Wired"
          className="w-20 h-20 object-contain rounded-lg"
        />
        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:ml-6">
          <div className="flex flex-col space-y-1">
            <h3 className="text-blue-600 font-semibold text-lg">
              {product.title}
            </h3>
            {/* <p className="text-gray-500 text-sm font-medium">✔ Assured</p> */}
            <div className="flex items-center mt-1 space-x-2">
              <span className="text-xl font-bold text-black"> $
              {(
                product.price -
                (product.price * Math.round(product.discountPercentage)) / 100
              ).toFixed(2)}</span>
              <span className="text-gray-400 line-through text-sm"> ${product.price}</span>
              <span className="text-green-600 text-sm font-semibold">
              {Math.round(product.discountPercentage)}%
              </span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition duration-200 p-2 rounded-full hover:cursor-pointer" onClick={()=>handleRemoveAddToWishlist(product.id)}>
            <AiOutlineDelete size={22} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Wishlist