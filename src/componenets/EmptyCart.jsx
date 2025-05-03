import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <>
      <center className="w-full border lg:h-150 border-amber-100 rounded-md shadow-sm p-10 bg-white text-sm md:text-base">
        <div className="flex justify-center mb-4">
          <BsCartX size={50} className="text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          Your cart is empty!
        </h2>
        <p className="text-gray-500 mt-2 mb-5">Add items to it now.</p>
        <Link
          to="/"
          className="mt-8 px-6 bg-blue-500 text-white py-2 rounded-lg\"
        >
          Shop now
        </Link>
      </center>
    </>
  );
}
