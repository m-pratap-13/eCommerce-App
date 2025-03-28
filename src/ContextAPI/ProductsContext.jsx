import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // All Product API Call

  const [fetchData, setFetchData] = useState([]);
  const [product, setProduct] = useState({});
  const [query, setQuery] = useState();

  async function fetchProduct() {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data.products);
      });
  }

  // Single Product API Call

  // Add to cart array

  const [addToCart, setAddToCart] = useState([]);
  const [addToWishlist, setAddToWishList] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [totalWishlist, setTotalWishlist] = useState(0);

  const handleAddToCart = (productId) => {
    setAddToCart([...new Set([...addToCart, productId])]);
  };

  const handleAddToWishlist = (productId) => {
    setAddToWishList([...new Set([...addToWishlist, productId])]);
  };

  const handleRemoveAddToCart = (productId) => {
    const updateAddTocart = addToCart.filter((id) => id !== productId);
    setAddToCart(updateAddTocart);
  };

  const handleRemoveAddToWishlist = (productId) => {
    const updateAddToWishlist = addToWishlist.filter((id) => id !== productId);
    setAddToWishList(updateAddToWishlist);
  };

  useEffect(() => {
    setTotalCart(addToCart.length);
  }, [addToCart]);

  useEffect(() => {
    setTotalWishlist(addToWishlist.length);
  }, [addToWishlist]);

  return (
    <ProductContext.Provider
      value={{
        fetchData,
        fetchProduct,
        handleAddToCart,
        totalCart,
        addToCart,
        product,
        setProduct,
        handleRemoveAddToCart,
        addToWishlist,
        handleAddToWishlist,
        totalWishlist,
        handleRemoveAddToWishlist,
        query,
        setQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
