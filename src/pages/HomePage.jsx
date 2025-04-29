import React, { useEffect, useState } from "react";
import HeroSection from "../componenets/HeroSection";
import ProductSection from "../componenets/ProductSection";
import SelectionContainer from "../componenets/SelectionContainer";
import { useSelector } from "react-redux";

function HomePage() {
  const [electronicssProducts, setElectroniceProducts] = useState([]);
  const [fashionsProducts, setFashionsProducts] = useState([]);
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [furnitureProducts, setFurnitureProducts] = useState([]);
  const [kitchenAccessoriesProducts, setkitchenAccessoriesProducts] = useState(
    []
  );

  useEffect(() => {
    const electronicsCategories = ["laptops", "smartphones", "tablets"];
    let allProducts = [];

    Promise.all(
      electronicsCategories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => {
            allProducts = allProducts.concat(data.products);
          })
      )
    ).then(() => {
      setElectroniceProducts(allProducts);
    });
  }, []);

  useEffect(() => {
    const fashionsCategories = [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "sunglasses",
      "tops",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
    ];
    let allProducts = [];

    Promise.all(
      fashionsCategories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => {
            allProducts = allProducts.concat(data.products);
          })
      )
    ).then(() => {
      setFashionsProducts(allProducts);
    });
  }, []);

  useEffect(() => {
    const beautyCategories = ["beauty", "fragrances", "skin-care"];
    let allProducts = [];

    Promise.all(
      beautyCategories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => {
            allProducts = allProducts.concat(data.products);
          })
      )
    ).then(() => {
      setBeautyProducts(allProducts);
    });
  }, []);

  useEffect(() => {
    const homeCategories = ["home-decoration", "furniture"];
    let allProducts = [];

    Promise.all(
      homeCategories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => {
            allProducts = allProducts.concat(data.products);
          })
      )
    ).then(() => {
      setFurnitureProducts(allProducts);
    });
  }, []);

  useEffect(() => {
    const kitchenCategories = ["kitchen-accessories"];
    let allProducts = [];

    Promise.all(
      kitchenCategories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => {
            allProducts = allProducts.concat(data.products);
          })
      )
    ).then(() => {
      setkitchenAccessoriesProducts(allProducts);
    });
  }, []);

  return (
    <>
      <HeroSection />
      <ProductSection
        section="Best of Electronics"
        products={electronicssProducts}
      />
      <ProductSection section="Best of Fashions" products={fashionsProducts} />
      <ProductSection section="Best of Beauty" products={beautyProducts} />
      <SelectionContainer />
      <ProductSection
        section="Home Decoration For You"
        products={furnitureProducts}
      />
      <ProductSection
        section="Kitchen Accessories For You"
        products={kitchenAccessoriesProducts}
      />
      <SelectionContainer />
    </>
  );
}

export default HomePage;
