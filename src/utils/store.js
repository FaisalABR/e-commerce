import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./reducer/productsSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
