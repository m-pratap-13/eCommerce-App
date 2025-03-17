import React, { useContext } from "react";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../ContextAPI/ProductsContext";

function Navbar() {
  const { totalCart, totalWishlist, setQuery, query } =
    useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length === 0) {
      navigate("/");
    } else {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-white shadow-md py-3 px-6 fixed top-0 right-0 left-0 z-10">
        {/* Logo */}
        <Link to="/" className="text-pink-500 text-3xl font-bold">
          M
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-900 font-medium">
          <Link to="" className="hover:text-pink-500">
            Home
          </Link>
          <Link to="#" className="hover:text-pink-500">
            About Us
          </Link>
          <Link to="#" className="hover:text-pink-500">
            Contact Us
          </Link>
        </div>

        {/* Search Bar - Now Visible on All Devices */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center w-150 mr-5 ml-5"
        >
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-gray-700"
            />
            <Link to={`/search/${query}`}>
              {" "}
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-15 h-5 cursor-pointer" />
            </Link>
          </div>
        </form>

        {/* Icons */}
        <div className="flex space-x-4 text-gray-900">
          <Link
            to="/addtowishlist"
            className="flex items-center cursor-pointer relative hover:text-pink-500"
          >
            <FaHeart className="mr-1 text-lg" />
            <span className="hidden md:inline">Wishlist</span>
            {totalWishlist > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                {totalWishlist}
              </span>
            )}
          </Link>
          <Link
            to="/addtocart"
            className="flex items-center cursor-pointer relative hover:text-pink-500"
          >
            <FaCartPlus className="mr-1 text-lg" />
            <span className="hidden md:inline">Cart</span>
            {totalCart > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                {totalCart}
              </span>
            )}
          </Link>
          <div className="flex items-center cursor-pointer relative hover:text-pink-500">
            <FaShoppingBag className="mr-1 text-lg" />
            <span className="hidden md:inline">Order</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-pink-500">
            <FaUser className="mr-1 text-lg" />
            <span className="hidden md:inline">Profile</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
