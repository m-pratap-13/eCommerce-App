import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-green-900">
          Don’t miss out on exclusive deals.
        </h1>
        <p className="text-lg text-green-700 mt-2">
          Don't Miss Out - Limited Stock at Rock-Bottom Prices!
        </p>
        <Link
          to="/"
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700"
        >
          Shop now
        </Link>
      </section>
    </div>
  );
};

export default HeroSection;
