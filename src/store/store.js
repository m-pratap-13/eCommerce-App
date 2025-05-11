import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../features/addToCartSlice";
import wishlistItemReducer from "../features/addToWishlistSlice";

export const store = configureStore({
  reducer: {
    cartId: cartItemReducer,
    wishlistId: wishlistItemReducer,
  },
});
