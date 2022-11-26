import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
// storeの設定
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
