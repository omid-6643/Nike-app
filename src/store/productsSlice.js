import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = state.products.find((p) => p.id === payload);
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;
