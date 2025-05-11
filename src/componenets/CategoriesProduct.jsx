import React, { useEffect, useState } from "react";
import Card from "./Card";
import Container from "./Container";

function CategoriesProduct({products}) {

  return (
    <Container>
      {products?.map((product) => (
        <Card
          key={product.id}
          product={product}
          id={product.id}
          title={product.title}
          priceAfterDiscount={(
            product.price -
            (product.price * Math.round(product.discountPercentage)) / 100
          ).toFixed(2)}
          price={product.price}
          discountPercentage={Math.round(product.discountPercentage)}
          stock={product.stock}
          images={product.images[0]}
        />
      ))}
    </Container>
  );
}

export default CategoriesProduct;
