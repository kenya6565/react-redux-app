import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
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
