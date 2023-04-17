import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, { payload }) => {
      const cartItem = state.items.find(
        (item) => item.product.id === payload.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: payload, quantity: 1 });
      }
    },
    changeQuantity: (state, { payload }) => {},
  },
});

export const { addCartItem, changeQuantity } = cartSlice.actions;
