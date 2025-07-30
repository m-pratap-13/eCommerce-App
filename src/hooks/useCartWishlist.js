import { useEffect, useState } from "react";

function useCartWishlist(allProductId) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let allProducts = [];

    Promise.all(
      allProductId?.map((id) =>
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            allProducts = allProducts.concat(data);
          })
      )
    ).then(() => {
      setProducts(allProducts);
    });
  }, [allProductId]);

  return products;
}

export default useCartWishlist;
