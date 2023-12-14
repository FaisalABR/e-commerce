import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    cartAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, productId, productAmount, price, color, size) {
        return {
          payload: {
            id: nanoid(),
            productId,
            name,
            productAmount,
            price,
            color,
            size,
            isChecked: false,
            isPaid: false,
          },
        };
      },
    },
    decrementAmount(state, action) {
      const { id } = action.payload;
      const existingCart = state.find((item) => item.id === id);
      if (existingCart) {
        existingCart.productAmount -= 1;
      }
    },
    incrementAmount(state, action) {
      const { id } = action.payload;
      const existingCart = state.find((item) => item.id === id);
      if (existingCart) {
        existingCart.productAmount += 1;
      }
    },
    deleteCartList(state, action) {
      const { id } = action.payload;
      console.log(id);
      const existingCart = state.find((item) => item.id === id);
      if (existingCart) {
        state.splice(
          state.findIndex((item) => item.id === id),
          1
        );
      }
    },
    handleCheckList(state, action) {
      const { id } = action.payload;
      const existingCart = state.find((item) => item.id === id);
      if (existingCart) {
        if (existingCart.isChecked === true) {
          existingCart.isChecked = false;
        } else {
          existingCart.isChecked = true;
        }
      }
    },
    handlePaidList(state, action) {
      const { id } = action.payload;
      const existingCart = state.find((item) => item.id === id);
      if (existingCart) {
        if (existingCart.paid === false) {
          existingCart.paid = true;
        }
      }
    },
  },
});

export const {
  cartAdded,
  decrementAmount,
  incrementAmount,
  deleteCartList,
  handleCheckList,
  handlePaidList,
} = cartSlice.actions;

export default cartSlice.reducer;
