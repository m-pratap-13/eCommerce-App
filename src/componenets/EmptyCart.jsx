import { Link } from "react-router-dom";

export default function EmptyCart({ icon, result,suggest }) {
  return (
    <>
      <center className="w-full border lg:h-150 border-amber-100 rounded-md shadow-sm p-10 bg-white text-sm md:text-base">
        <div className="flex justify-center mb-4">
          {/* <BsCartX size={50} className="text-gray-400" /> */}
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          {result}
        </h2>
        <p className="text-gray-500 mt-2 mb-5">{suggest}</p>
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
