import { useEffect, useState } from "react";

function useSingleProduct(id) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [id]);

  return product;
}

export default useSingleProduct;
