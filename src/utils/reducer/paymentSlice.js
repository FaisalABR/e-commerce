import { createSlice } from "@reduxjs/toolkit";

const initialState = { balance: 500000 };

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    confirmPayment(state, action) {
      const { totalPrice } = action.payload;
      if (totalPrice !== 0) {
        state.balance -= totalPrice;
      }
    },
    topUp(state, action) {
      const { amount } = action.payload;
      state.balance += parseFloat(amount);
    },
  },
});

export const { confirmPayment, topUp } = paymentSlice.actions;

export default paymentSlice.reducer;
