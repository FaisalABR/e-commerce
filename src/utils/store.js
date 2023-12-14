import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./reducer/productsSlice";
import cartSlice from "./reducer/cartSlice";
import paymentSlice from "./reducer/paymentSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
    carts: cartSlice,
    payment: paymentSlice,
  },
});
