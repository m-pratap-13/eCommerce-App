import React from "react";
import SearchCard from "../componenets/SearchCard";

function SearchItems({products}) {
  return (
    <>
      {products?.map((product) => (
        <SearchCard
          key={product.id}
          id={product.id}
          title={product.title}
          priceAfterDiscount={(
            product.price -
            (product.price * Math.round(product.discountPercentage)) / 100
          ).toFixed(2)}
          price={product.price}
          discountPercentage={Math.round(product.discountPercentage)}
          stock={product.stock}
          images={product.images?.[0]}
          rating={product.rating}
          description={product.description}
          warranty={product.warrantyInformation}
        />
      ))}
    </>
  );
}

export default SearchItems;
