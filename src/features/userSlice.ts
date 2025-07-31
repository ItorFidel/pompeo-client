import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import setTotalCartQtyAmt from "../helpers/totalCartQtyAmt";
import { initialUser } from "../initialState";
import { CartItemProps, UserProps } from "../services/types";

const userSlice = createSlice({
  name: "user",
  initialState: { user: initialUser },
  reducers: {
    loginUser: (state, action: PayloadAction<UserProps>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = initialUser;
    },
    incrementUserCartItem: (state, action: PayloadAction<CartItemProps>) => {
      const incrementItem = state.user.cart.cartItems.filter(
        (cartItem) => cartItem.item._id === action.payload.item._id
      );

      if (incrementItem.length) {
        state.user.cart.cartItems.map((cartItem) => {
          cartItem.item._id === incrementItem[0].item._id && cartItem.count++;
        });
      } else {
        state.user.cart.cartItems.push(action.payload);
      }

      setTotalCartQtyAmt(state.user.cart);
    },
    decrementUserCartItem: (state, action: PayloadAction<CartItemProps>) => {
      const payloadItemId = action.payload.item._id;
      const decrementItem = state.user.cart.cartItems.filter(
        (cartItem) => cartItem.item._id === payloadItemId
      );

      if (decrementItem[0]?.count > 1) {
        state.user.cart.cartItems.map((cartItem) => {
          cartItem.item._id === decrementItem[0].item._id && cartItem.count--;
        });
      } else {
        state.user.cart.cartItems = state.user.cart.cartItems.filter(
          (cartItem) => cartItem.item._id !== payloadItemId
        );
      }

      setTotalCartQtyAmt(state.user.cart);
    },
    removeUserCartItem: (state, action: PayloadAction<string>) => {
      state.user.cart.cartItems = state.user.cart.cartItems.filter(
        (cartItem) => cartItem.item._id !== action.payload
      );
      setTotalCartQtyAmt(state.user.cart);
    },
  },
});

export const {
  loginUser,
  logoutUser,
  incrementUserCartItem,
  decrementUserCartItem,
  removeUserCartItem,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
