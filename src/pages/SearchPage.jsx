import React, { useEffect, useState } from "react";
import Container from "../componenets/Container";
import SearchCard from "../componenets/SearchCard";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { query } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [query]);
  return (
    <Container>
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
    </Container>
  );
}

export default SearchPage;
