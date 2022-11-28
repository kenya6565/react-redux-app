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
  },
});

export const { clearCart } = cartSlice.actions;
export const { removeItem } = cartSlice.actions;
export default cartSlice.reducer;
