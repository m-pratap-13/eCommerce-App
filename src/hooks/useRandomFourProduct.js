import { useEffect, useState } from "react";

function useRandomFourProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=4&skip=${Math.floor(
        Math.random() * 190
      )}&select=images,title,discountPercentage,`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return products;
}

export default useRandomFourProduct;
