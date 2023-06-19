import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    cartId: 1,
    productId: 1,
    name: "Women's casual Shirt",
    productAmount: 3,
    price: 20000,
  },
];

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    cartAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, productId, productAmount, price) {
        return {
          payload: {
            id: nanoid(),
            productId,
            name,
            productAmount,
            price,
          },
        };
      },
    },
  },
});

export const { cartAdded } = cartSlice.actions;

export default cartSlice.reducer;
