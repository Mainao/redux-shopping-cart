import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  products: [],
};

// A slice for posts with our three reducers
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getProductsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const { getProducts, getProductsSuccess, getProductsFailure } =
  productsSlice.actions;

// A selector
export const productsSelector = (state) => state.products;

// The reducer
export default productsSlice.reducer;

// Asynchronous thunk action
export function fetchProducts(category) {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();

      dispatch(getProductsSuccess(data));
    } catch (error) {
      dispatch(getProductsFailure());
    }
  };
}
