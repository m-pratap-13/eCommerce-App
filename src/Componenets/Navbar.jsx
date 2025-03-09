import React, { useContext } from 'react'
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProductContext } from "../ContextAPI/ProductsContext";

function Navbar() {
   const {totalCart,totalWishlist } = useContext(ProductContext);
  //  console.log(addTocart.length)
  return (
    <>
     <nav className="flex items-center justify-between bg-white shadow-md py-3 px-6 fixed top-0 right-0 left-0 z-1">
      {/* Logo */}
      <div className="text-pink-500 text-3xl font-bold">M</div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-900 font-medium">
        <Link to="" className="hover:text-pink-500">Home</Link>
        <Link to="#" className="hover:text-pink-500">About Us</Link>
        <Link to="#" className="hover:text-pink-500">Contact Us</Link>
      </div>
      
      {/* Search Bar */}
      <div className="relative w-2/5 hidden md:block">
        <FaSearch className="absolute left-4 top-3 text-gray-500" />
        <input type="text" placeholder="Search for products, brands and more" className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full outline-none bg-gray-100" />
      </div>
      
      {/* Icons */}
      <div className="flex space-x-6 text-gray-900">
      
      
        <Link to="/addtowishlist" className="flex items-center cursor-pointer relative hover:text-pink-500">
          <FaHeart className="mr-1 text-lg" /> 
          <span className="hidden md:inline">Wishlist</span>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">{totalWishlist}</span>
        </Link>
        <Link to="/addtocart" className="flex items-center cursor-pointer relative hover:text-pink-500">
          <FaCartPlus className="mr-1 text-lg" /> 
          <span className="hidden md:inline">Cart</span>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">{totalCart}</span>
        </Link>
        <div className="flex items-center cursor-pointer relative hover:text-pink-500">
          <FaShoppingBag className="mr-1 text-lg" /> 
          <span className="hidden md:inline">Order</span>
        </div>
        <div className="flex items-center cursor-pointer hover:text-pink-500"><FaUser className="mr-1 text-lg" /> <span className="hidden md:inline">Profile</span></div>
      </div>
    </nav>
    </>
  )
}

export default Navbar