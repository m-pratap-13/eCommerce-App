import { FaChevronRight } from "react-icons/fa";
import SmallCard from "./SmallCard";
import useRandomFourProduct from "../hooks/useRandomFourProduct";

export default function SelectionBox({ section }) {

  const products = useRandomFourProduct()

  return (
    <section className="bg-gray-50 w-[100%] p-4 sm:p-6 md:p-8 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{section}</h2>
        <FaChevronRight className="text-blue-600 cursor-pointer" />
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <SmallCard
            key={product.id}
            id={product.id}
            title={product.title}
            discountPercentage={Math.round(product.discountPercentage)}
            images={product.images?.[0]}
          />
        ))}
      </div>
    </section>
  );
}
