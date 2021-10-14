import { combineReducers } from "redux";
import productsReducer from "./products";
import productDetailsReducer from "./productDetails";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
