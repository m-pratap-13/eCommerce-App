import React from "react";
import {FaTshirt, FaMobileAlt, FaHeadphones, FaTv, FaPuzzlePiece, FaFutbol, FaStore } from "react-icons/fa";
import { LuArmchair } from "react-icons/lu";

const HeroSection = () => {
  const categories = [
    { icon: <FaTshirt />, label: "Fashion", link: "#fashion" },
    { icon: <FaMobileAlt />, label: "Electronics", link: "#electronics" },
    { icon: <FaHeadphones />, label: "Gaming", link: "#gaming" },
    { icon: <FaTv />, label: "TV/Projectors", link: "#tv-projectors" },
    { icon: <FaPuzzlePiece />, label: "Toys", link: "#toys" },
    { icon: <FaFutbol />, label: "Sport", link: "#sport" },
    { icon: <FaStore />, label: "Grocery", link: "#grocery" },
    { icon: <LuArmchair />, label: "Furniture", link: "#furniture" }
  ];

  return (
    <div className="bg-gray-100">
      <section className="relative w-full h-[400px] bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-green-900">Don’t miss out on exclusive deals.</h1>
        <p className="text-lg text-green-700 mt-2">Don't Miss Out - Limited Stock at Rock-Bottom Prices!</p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700">Shop now</button>
      </section>
      
      <div className="relative -mt-10 bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <a key={index} href={category.link} className="flex flex-col items-center hover:text-green-600">
            <span className="text-xl">{category.icon}</span>
            <p className="text-sm font-semibold">{category.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
