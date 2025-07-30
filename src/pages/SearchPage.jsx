import React, { useEffect, useState } from "react";
import Container from "../componenets/Container";
import { useParams } from "react-router-dom";
import SearchItems from "../componenets/SearchItems";
import EmptyCart from "../componenets/EmptyCart";
import { ImSearch } from "react-icons/im";
import useSearch from "../hooks/useSearch";

function SearchPage() {
  const { query } = useParams();
  const products = useSearch(query);
  return (
    <Container>
      {products.length > 0 ? (
        <SearchItems products={products} />
      ) : (
        <EmptyCart
          icon={<ImSearch size={50} />}
          result="Sorry, no results found!"
          suggest="Please check the spelling or try searching for something else ...."
        />
      )}
    </Container>
  );
}

export default SearchPage;
