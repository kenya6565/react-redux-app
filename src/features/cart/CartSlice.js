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
    clearCart: () => {
      // state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      // action.type = 'cart/removeItem'

      // console.log(action.payload);
      console.log(cartItems[action.payload - 1]);
    },
  },
});

export const { clearCart } = cartSlice.actions;
export const { removeItem } = cartSlice.actions;
export default cartSlice.reducer;
