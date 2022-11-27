import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
};

const cartSlice = createSlice({
  // この名前はuseSelectorで使用する
  name: "cart",
  initialState,
  reducers: {
    // これがactionの名前になる
    clearCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
    },
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
