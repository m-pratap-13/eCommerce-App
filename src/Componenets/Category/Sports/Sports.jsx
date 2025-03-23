import React, { useEffect, useState } from "react";
import SportsCard from "./SportsCard";
import HeroSection from "../HeroSection";

function Sports() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((data) => {
        setSports(data.products);
      });
  }, []);
  return (
    <>
      <HeroSection />
      <div className="p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen">
        {sports.map((product) => (
          <SportsCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Sports;
