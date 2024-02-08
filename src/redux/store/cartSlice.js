import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {},
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload)
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions;