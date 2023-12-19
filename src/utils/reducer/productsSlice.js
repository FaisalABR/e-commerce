import { createSlice } from "@reduxjs/toolkit";
import { dataProduct } from "../data";

const initialState = dataProduct;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
