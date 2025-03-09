import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // All Product API Call

  const [fetchData, setFetchData] = useState([]);
  const [product, setProduct] = useState({});
  const { id } = useParams();

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
    setAddToCart([...addToCart, productId]);
  };

  const handleAddToWishlist = (productId) => {
    setAddToWishList([...addToWishlist, productId]);
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
