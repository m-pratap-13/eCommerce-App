import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { FaCarTunnel } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CategoriesMenu({ list }) {
  return (
    <>
      <Link
        to={`/categories/${list.slug}`}
        className="bg-gray-200 w-50 h-9 lg:w-60 lg:h-10 flex items-center p-2 lg:text-xl rounded-xl justify-between hover:bg-gray-400"
      >
        {list.name} <BiArrowFromLeft />
      </Link>
    </>
  );
}
