import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const addToCartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addItem = action.payload;
      state.cartItems.push(addItem);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToCart, removeTodo } = addToCartSlice.actions;

export default addToCartSlice.reducer;
