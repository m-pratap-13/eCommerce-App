import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar() {
  const cartItemsId = useSelector((state) => state.cartId.cartItemsId) || [];
  const wishlistItemsId =
    useSelector((state) => state.wishlistId.wishlistItemsId) || [];
  const navLink = [
    {
      name: "Categories",
      slug: "/categories-menu",
      icon: <BiCategory />,
      mobile: true,
      desktop: true,
    },
    {
      name: "Cart",
      slug: "/addtocart",
      icon: <FiShoppingCart />,
      length: cartItemsId.length,
      mobile: true,
      desktop: true,
    },
    {
      name: "Wishlist",
      slug: "/wishlist",
      icon: <FaRegHeart />,
      length: wishlistItemsId.length,
      mobile: false,
      desktop: true,
    },
    {
      name: "Account",
      slug: "/account",
      icon: <FiUser />,
      mobile: true,
      desktop: true,
    },
  ];
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length === 0) {
      navigate("/");
    } else {
      navigate(`/search/${query}`);
    }
  };
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-[100%] z-10">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center justify-between gap-4">
        {/* Logo and Cart/User/Menu */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to='/' className="w-40 h-[80%] flex justify-start gap-2 items-center cursor-pointer">
            <FaCartPlus size={30} />
            <h1 className="text-2xl font-bold">ShopHub</h1>
          </Link>

          <div className="md:hidden flex items-center gap-4">
            {navLink
              .filter((link) => link.mobile)
              .map((item) => (
                <NavButton key={item.name} item={item} />
              ))}
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
          {navLink
            .filter((link) => link.desktop)
            .map((item) => (
              <NavButton key={item.name} item={item} />
            ))}
        </div>
      </div>
    </nav>
  );
}
