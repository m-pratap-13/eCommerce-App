import React, { useEffect, useState } from "react";
import GroceryCard from "./GroceryCard";
import HeroSection from "../HeroSection";

function Grocery() {
  const [grocery, setGrocery] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((res) => res.json())
      .then((data) => {
        setGrocery(data.products);
      });
  }, []);
  return (
    <>
      <HeroSection />
      <div className="p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen">
        {grocery.map((product) => (
          <GroceryCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Grocery;
