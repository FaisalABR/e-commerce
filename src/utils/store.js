import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./reducer/productsSlice";
import cartSlice from "./reducer/cartSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
    carts: cartSlice,
  },
});
