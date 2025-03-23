import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import BeautyCard from "./BeautyCard";

function Sports() {
  const [beauty, setBeauty] = useState([]);
  const [skinCare, setSkinCare] = useState([]);
  const [fragrances, setFragrances] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty")
      .then((res) => res.json())
      .then((data) => {
        setBeauty(data.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/skin-care")
      .then((res) => res.json())
      .then((data) => {
        setSkinCare(data.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/fragrances")
      .then((res) => res.json())
      .then((data) => {
        setFragrances(data.products);
      });
  }, []);

  return (
    <>
      <HeroSection />
      <div className="p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen">
        {beauty.map((product) => (
          <BeautyCard key={product.id} product={product} />
        ))}
          {skinCare.map((product) => (
          <BeautyCard key={product.id} product={product} />
        ))}
          {fragrances.map((product) => (
          <BeautyCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Sports;
