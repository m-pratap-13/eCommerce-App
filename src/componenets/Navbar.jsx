import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const cartItemsId = useSelector((state) => state.cartId.cartItemsId) || [];
  const wishlistItemsId =
    useSelector((state) => state.wishlistId.wishlistItemsId) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length === 0) {
      navigate("/");
    } else {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((tags) => setTags(tags));
  }, []);
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-[100%] z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Logo and Cart/User/Menu */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-blue-500 text-2xl font-bold">
              eCommarce{" "}
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <Link
              to={"/wishlist"}
              className="flex items-center relative gap-1 text-sm border px-2 py-1 rounded-md cursor-pointer"
            >
              <FaRegHeart />
              Wishlist
               {wishlistItemsId.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                  {wishlistItemsId.length}
                </span>
              )}
            </Link>
            <Link
              to="/addtocart"
              className="flex items-center gap-1 relative text-sm border px-2 py-1 rounded-md cursor-pointer"
            >
              <FiShoppingCart />
              Cart
              {cartItemsId.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItemsId.length}
                </span>
              )}
            </Link>
            <button className="flex items-center gap-1 text-sm border px-2 py-1 rounded-md cursor-pointer">
              <FiUser /> Account
            </button>
            {/* <FiMenu /> */}
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-grow md:flex-grow-0 w-full md:w-[40%]">
          <form
            className="flex bg-gray-800 rounded-lg overflow-hidden"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search in all categories"
              className="w-full px-4 py-2 bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white">
              <FiSearch />
            </button>
          </form>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to={"/wishlist"}
            className="flex items-center relative gap-2 text-sm cursor-pointer border px-2 py-1"
          >
            <FaRegHeart /> Wishlist
             {wishlistItemsId.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                  {wishlistItemsId.length}
                </span>
              )}
          </Link>
          <Link
            to="/addtocart"
            className="flex items-center relative gap-2 text-sm border px-2 py-1 cursor-pointer"
          >
            <FiShoppingCart />
            Cart
            {cartItemsId.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItemsId.length}
              </span>
            )}
          </Link>
          <div className="flex items-center gap-2 text-sm cursor-pointer border px-2 py-1 ">
            <FiUser />
            Account
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto mt-4 flex flex-wrap justify-start md:justify-start gap-4 text-sm font-medium">
        {tags.map((tag, idx) => (
          <Link key={idx} to={`/${tag.slug}`} className="hover:underline">
            {tag.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
