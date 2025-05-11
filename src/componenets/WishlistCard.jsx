import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeToWishlist } from "../features/addToWishlistSlice";

export default function WishlistCard({
  id,
  title,
  price,
  priceAfterDiscount,
  images,
  discountPercentage,
}) {
  const dispatch = useDispatch();
  return (
    <div className="w-full space-y-4">
      {/* Wishlist Item */}
      <div
        key={id}
        className="flex flex-col sm:flex-row justify-between items-center gap-4 border p-5"
      >
        {/* Image */}
        <Link to={`/product/${id}/${title}`} className="w-24 h-28 border mt-4">
          <img
            src={images}
            alt={title}
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Details */}
        <Link
          to={`/product/${id}/${title}`}
          className="flex-1 text-center sm:text-left"
        >
          <h3 className="text-sm md:text-base font-medium text-blue-600 hover:underline cursor-pointer">
            {title}
          </h3>
          <div className="mt-1 text-sm flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center sm:justify-start">
            <span className="font-semibold text-black">
              {priceAfterDiscount}
            </span>
            <span className="line-through text-gray-500">{price}</span>
            <span className="text-green-600 font-medium">
              {discountPercentage}% Off
            </span>
          </div>
        </Link>

        {/* Delete Icon */}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(removeToWishlist(id))}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
