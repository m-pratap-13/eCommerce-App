import React from "react";
import { useSelector } from "react-redux";
import Container from "../componenets/Container";
import SearchCard from "../componenets/SearchCard"

function AddToCartPage() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <Container>
      {cartItems?.map((id) => {
        <SearchCard />;
      })}
    </Container>
  );
}

export default AddToCartPage;
