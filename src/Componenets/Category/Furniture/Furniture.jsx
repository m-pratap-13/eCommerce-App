import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import FurnitureCard from "./FurnitureCard";

function Furniture() {
  const [furniture, setFurniture] = useState([]);
  const [homeDecoration, setHomeDecoration] = useState([]);
  const [kitchenAccessories, setKitchenAccessories] = useState([]);
  
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/furniture")
      .then((res) => res.json())
      .then((data) => {
        setFurniture(data.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/home-decoration")
      .then((res) => res.json())
      .then((data) => {
        setHomeDecoration(data.products);
      });
  }, []);

  
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/kitchen-accessories")
      .then((res) => res.json())
      .then((data) => {
        setKitchenAccessories(data.products);
      });
  }, []);

  

  return (
    <>
      <HeroSection />
      <div className="p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen">
        {furniture.map((product) => (
          <FurnitureCard key={product.id} product={product} />
        ))}
        {homeDecoration.map((product) => (
          <FurnitureCard key={product.id} product={product} />
        ))}
           {kitchenAccessories.map((product) => (
          <FurnitureCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Furniture;
