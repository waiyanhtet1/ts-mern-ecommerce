import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../types/Cart";

const initialState: Cart = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // if item exit increase quantity
      const isExit = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (isExit >= 0) {
        state.cartItems[isExit].quantity += 1;
      } else {
        // else push into cartItem[]
        state.cartItems.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
