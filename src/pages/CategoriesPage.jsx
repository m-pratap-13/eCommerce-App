import React, { useEffect, useState } from "react";
import HeroSection from "../componenets/HeroSection";
import CategoriesProduct from "../componenets/CategoriesProduct";
import { useParams } from "react-router-dom";

function CategoriesPage() {
  const { categories } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categories}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [categories]);

  return (
    <>
      <HeroSection />
      <CategoriesProduct products={products} />
    </>
  );
}

export default CategoriesPage;
