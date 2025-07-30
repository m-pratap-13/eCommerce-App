import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SearchCard({
  id,
  title,
  priceAfterDiscount,
  price,
  discountPercentage,
  images,
  rating,
  description,
  warranty,
}) {
  return (
    <Link
      to={`/product/${id}/${title}`}
      className="flex flex-col gap-4 w-[80%]"
    >
      {/* Single Card */}
      <div className="flex flex-col md:flex-row border rounded-lg p-4 gap-4 shadow-sm">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={images}
            alt={title}
            className="w-32 h-24 object-contain"
            loading="lazy"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col">
            <h2 className="text-blue-700 font-semibold text-lg">{title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex items-center bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                {rating} <FaStar className="ml-1 text-yellow-300" />
              </span>
            </div>
          </div>

          {/* Specs */}
          <div className="text-sm text-gray-600 space-y-0.5">{description}</div>
          <span className="text-sm text-gray-400">{warranty}</span>
        </div>

        {/* Price Section */}
        <div className="flex flex-col items-start md:items-end justify-between">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold">${priceAfterDiscount}</span>
            </div>
            <div className="text-gray-400 text-sm line-through">${price}</div>
            <div className="text-green-600 text-sm font-semibold">
              {discountPercentage} off
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
