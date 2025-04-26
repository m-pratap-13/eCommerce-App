import { useEffect, useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((tags) => setTags(tags));
  }, []);
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Logo and Cart/User/Menu */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-blue-500 text-2xl font-bold">eCommarce </Link>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm border px-2 py-1 rounded-md cursor-pointer">
              <FiShoppingCart /> ($106.7)
            </button>
            <button className="flex items-center gap-1 text-sm border px-2 py-1 rounded-md cursor-pointer">
              <FiShoppingCart /> ($106.7)
            </button>
            <button className="flex items-center gap-1 text-sm border px-2 py-1 rounded-md cursor-pointer">
              <FiUser />
            </button>
            {/* <FiMenu /> */}
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-grow md:flex-grow-0 w-full md:w-[40%]">
          <div className="flex bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search in all categories"
              className="w-full px-4 py-2 bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-white">
              <FiSearch />
            </button>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            <FiShoppingCart />4 items ($106.7)
          </div>
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            <FiShoppingCart />4 items ($106.7)
          </div>
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            <FiUser />
            Account
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto mt-4 flex flex-wrap justify-start md:justify-start gap-4 text-sm font-medium">
        {tags.map((tag, idx) => (
          <Link
            key={idx}
            to={`/${tag.slug}`}
            className="hover:underline"
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
