import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import setTotalCartQtyAmt from "../helpers/totalCartQtyAmt";
import { CartItemProps, CartProps } from "../services/types";
import { initialProduct } from "../initialState";

export const initialCart: CartProps = {
  cartItems: [{ item: initialProduct, count: 0 }],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    incrementDefaultCartItem: (state, action: PayloadAction<CartItemProps>) => {
      const incrementItem = state.cartItems.filter(
        (cartItem) => cartItem.item._id === action.payload.item._id
      );

      if (incrementItem.length) {
        state.cartItems.map((cartItem) => {
          cartItem.item._id === incrementItem[0].item._id && cartItem.count++;
        });
      } else {
        state.cartItems.push(action.payload);
      }

      setTotalCartQtyAmt(state);
    },
    decrementDefaultCartItem: (state, action: PayloadAction<CartItemProps>) => {
      const payloadItemId = action.payload.item._id;
      const decrementItem = state.cartItems.filter(
        (cartItem) => cartItem.item._id === payloadItemId
      );

      if (decrementItem[0]?.count > 1) {
        state.cartItems.map((cartItem) => {
          cartItem.item._id === decrementItem[0].item._id && cartItem.count--;
        });
      } else {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.item._id !== payloadItemId
        );
      }

      setTotalCartQtyAmt(state);
    },
    removeDefaultCartItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.item._id !== action.payload
      );
      setTotalCartQtyAmt(state);
    },
  },
});

export const {
  incrementDefaultCartItem,
  decrementDefaultCartItem,
  removeDefaultCartItem,
} = cartSlice.actions;
export const selectProduct = (state: RootState) => state.cart;
export default cartSlice.reducer;
