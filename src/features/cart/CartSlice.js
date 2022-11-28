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
      return { cartItems: [], amount: 0, total: 0 };
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        // 削除したいidじゃない場合は残す
        return itemId !== item.id;
      });
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount += 1;
    },

    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount -= 1;
    },
  },
});

export const { clearCart } = cartSlice.actions;
export const { removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
