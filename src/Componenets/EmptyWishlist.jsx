import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function EmptyWishlist() {
  return (
    <div className="flex items-center justify-center m-10 bg-white">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        <div className="flex justify-center mb-4">
          <BsHeart size={50} className="text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Empty Wishlist</h2>
        <p className="text-gray-500 mt-2 mb-5">You have no items in your wishlist. Start adding!</p>
        <Link to="/" className="mt-8 px-6 bg-blue-500 text-white py-2 rounded-lg\">Shop now</Link>
      </div>
    </div>
  );
}