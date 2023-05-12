import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import showCartReducer from "./showCart";

const store = configureStore({
  reducer: { cart: cartReducer, showCart: showCartReducer },
});

export default store;
