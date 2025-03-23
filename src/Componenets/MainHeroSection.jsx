import React from "react";
import {
  FaTshirt,
  FaMobileAlt,
  FaHeadphones,
  FaTv,
  FaFutbol,
  FaStore,
  FaSpa,
} from "react-icons/fa";
import { LuArmchair } from "react-icons/lu";
import { FaCar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MainHeroSection = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-green-900">
          Don’t miss out on exclusive deals.
        </h1>
        <p className="text-lg text-green-700 mt-2">
          Don't Miss Out - Limited Stock at Rock-Bottom Prices!
        </p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700">
          Shop now
        </button>
      </section>

      {/* Categories */}
      <div className=" relative -mt-10 bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto grid  grid-cols-4 md:grid-cols-8 gap-10">
      <Link to="/all-products" className="flex flex-col items-center hover:text-green-600">
          <FaTv className="text-xl" />
          <p className="text-sm font-semibold">All Products</p>
        </Link>
        <Link
          to="/fashion"
          className="flex flex-col items-center hover:text-green-600"
        >
          <FaTshirt className="text-xl" />
          <p className="text-sm font-semibold">Fashion</p>
        </Link>

        <Link
          to="/electronics"
          className="flex flex-col items-center hover:text-green-600"
        >
          <FaMobileAlt className="text-xl" />
          <p className="text-sm font-semibold">Electronics</p>
        </Link>

        <Link
          to="/beauty"
          className="flex flex-col items-center hover:text-green-600"
        >
          <FaSpa className="text-xl" />
          <p className="text-sm font-semibold">Beauty</p>
        </Link>

        <Link
          to="/vehicles"
          className="flex flex-col items-center hover:text-green-600"
        >
          <FaCar className="text-xl" />
          <p className="text-sm font-semibold">Vehicles</p>
        </Link>

        <Link
          to="/sports-accessories"
          className="flex flex-col items-center hover:text-green-600"
        >
          <FaFutbol className="text-xl" />
          <p className="text-sm font-semibold">Sport</p>
        </Link>

        <Link
          to="/grocery"
          className="flex flex-col items-center hover:text-green-600"
        >
          <FaStore className="text-xl" />
          <p className="text-sm font-semibold">Grocery</p>
        </Link>

        <Link
          to="/home-decoration"
          className="flex flex-col items-center hover:text-green-600"
        >
          <LuArmchair className="text-xl" />
          <p className="text-sm font-semibold">Decoration</p>
        </Link>

      
      </div>
    </div>
  );
};

export default MainHeroSection;
