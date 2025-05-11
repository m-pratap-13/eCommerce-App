import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItemsId: [],
};

export const addToWishlistSlice = createSlice({
  name: "wishlistItem",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistItemsId.push(action.payload);
    },
    removeToWishlist: (state, action) => {
      state.wishlistItemsId = state.wishlistItemsId.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeToWishlist } = addToWishlistSlice.actions;

export default addToWishlistSlice.reducer;
