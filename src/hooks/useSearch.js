import { useEffect, useState } from "react";

function useSearch(query) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, [query]);

  return products;
}

export default useSearch;
