import React, { useContext, useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { ProductContext } from "../ContextAPI/ProductsContext";
import { useParams } from "react-router-dom";

function SingleProductPage() {
 
  const { id } = useParams();
  const { handleAddToCart,product,setProduct } = useContext(ProductContext);

  useEffect(() => {
    async function singleProductData() {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }
    singleProductData();
  }, []);

  return (
    <>
      <div className="mt-16 flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-cyan-200 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product.images?.[0]}
                alt="Product"
                className="h-100 rounded-lg shadow-md"
              />
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-2xl font-semibold">{product.title}</h2>
              <span className=" inline-block bg-blue-500 text-white text-lg font-bold px-3 py-1 rounded mt-2">
                ${product.price}
              </span>

              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Brand : </span>{" "}
                  {product.brand}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Description:</span>{" "}
                  {product.description}
                </p>

                <p className="text-gray-700">
                  <span className="font-semibold">Rating : </span>{" "}
                  {product.rating}/5
                </p>
                {/* <p className="text-gray-700">
                  <span className="font-semibold">Display:</span> LED-backlit
                  IPS LCD
                </p> */}
              </div>

              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={()=>handleAddToCart(product.id)}
              >
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 border-t pt-4">
            <h3 className="text-xl  border-b pb-4 mb-5 font-semibold">
              Reviews
            </h3>
            {product.reviews?.map((review) => (
              <ReviewCard key={review.reviewerName} userReview={review} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductPage;
