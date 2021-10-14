import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  productDetails: [],
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    getProduct: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.productDetails = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getProductFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getProduct, getProductSuccess, getProductFailure } =
  productDetailsSlice.actions;

export const productDetailsSelector = (state) => state.productDetails;

export default productDetailsSlice.reducer;

export function fetchProductDetails(id) {
  return async (dispatch) => {
    dispatch(getProduct());
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      dispatch(getProductSuccess(data));
    } catch (error) {
      dispatch(getProductFailure());
    }
  };
}
