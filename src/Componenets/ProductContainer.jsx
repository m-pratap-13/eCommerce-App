import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import HeroSection from "./HeroSection";
import { ProductContext } from "../ContextAPI/ProductsContext";


function ProductContainer() {
  const { fetchData, fetchProduct } = useContext(ProductContext);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <HeroSection />
      <div className="text-4xl font-bold text-900 text-center mt-7">
        Best Selling Products
      </div>
      <div className="p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen">
        {fetchData.slice(0, 15).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            
          />
        ))}
      </div>
    </>
  );
}

export default ProductContainer;
