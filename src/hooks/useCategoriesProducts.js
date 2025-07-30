import { useEffect, useState } from "react";

function useCategoriesProducts(categories) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categories}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [categories]);
  return products;
}

export default useCategoriesProducts;
