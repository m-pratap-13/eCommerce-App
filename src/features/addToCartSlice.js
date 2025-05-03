import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsId: [],
};

export const addToCartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItemsId.push(action.payload);
    },
    removeToCart: (state, action) => {
      state.cartItemsId = state.cartItemsId.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addToCart, removeToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
