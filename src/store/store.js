import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../features/addToCartSlice";

export const store = configureStore({
  reducer: cartItemReducer,
});
