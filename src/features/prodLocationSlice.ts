import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../services/types";
import { RootState } from "../app/store";
import { initialProduct } from "../initialState";

const prodLocationSlice = createSlice({
  name: "prodLocation",
  initialState: { product: initialProduct },
  reducers: {
    setProdLocation: (state, action: PayloadAction<ProductProps>) => {
      state.product = action.payload;
    },
  },
});

export const { setProdLocation } = prodLocationSlice.actions;
export const selectprodLocation = (state: RootState) =>
  state.prodLocation.product;
export default prodLocationSlice.reducer;
