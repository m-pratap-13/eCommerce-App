import React, { useEffect, useState } from "react";
import Container from "../componenets/Container";
import { useParams } from "react-router-dom";
import SearchItems from "../componenets/SearchItems";
import EmptyCart from "../componenets/EmptyCart";
import { ImSearch } from "react-icons/im";

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
      {products.length > 0 ? (
        <SearchItems products={products} />
      ) : (
        <EmptyCart icon={<ImSearch size={50}/>} text="SEARCH" />
      )}
    </Container>
  );
}

export default SearchPage;
