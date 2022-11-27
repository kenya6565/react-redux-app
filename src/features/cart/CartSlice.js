import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  // この名前はuseSelectorで使用する
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
