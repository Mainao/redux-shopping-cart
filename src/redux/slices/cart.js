import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let doesItemExist = false;
      const newState = state.cart.map((item) => {
        if (item.item.id === payload.id) {
          item.quantity += 1;
          doesItemExist = true;
        }
        return item;
      });
      if (doesItemExist) {
        state.cart = [...newState];
      } else {
        state.cart = [...state.cart, { item: { ...payload }, quantity: 1 }];
      }
    },
    removeFromCart: (state, { payload }) => {
      const updated = state.cart.filter((item) => item.item.id !== payload);
      state.cart = updated;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartSelector = (state) => state.cart;

export default cartSlice.reducer;
