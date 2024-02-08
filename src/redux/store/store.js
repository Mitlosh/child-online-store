import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  sidebar: sidebarReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
