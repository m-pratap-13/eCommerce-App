import SmallCard from "./SmallCard";

export default function ProductSection({ section, products }) {
  return (
    <section className="bg-blue-50 py-6 px-4 sm:px-6 lg:px-10 m-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{section}</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-6">
          {products.map((product) => (
            <SmallCard
              key={product.id}
              id={product.id}
              title={product.title}
              discountPercentage={Math.round(product.discountPercentage)}
              images={product.images[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
