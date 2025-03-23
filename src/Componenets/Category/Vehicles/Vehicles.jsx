import React, { useEffect, useState } from "react";
import VehiclesCard from "./VehiclesCard";
import HeroSection from "../HeroSection";

function Sports() {
  const [vehicles, setVehicles] = useState([]);
  const [motorCycle, setMotorCycle] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/vehicle")
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/motorcycle")
      .then((res) => res.json())
      .then((data) => {
        setMotorCycle(data.products);
      });
  }, []);

  return (
    <>
      <HeroSection />
      <div className="p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen">
        {vehicles.map((product) => (
          <VehiclesCard key={product.id} product={product} />
        ))}
          {motorCycle.map((product) => (
          <VehiclesCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Sports;
