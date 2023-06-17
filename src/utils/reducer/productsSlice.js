import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Casual Shirt",
    status: "need to confirm",
    price: 150000,
    category: ["man", "casual"],
    size: ["L", "M", "XL"],
    color: ["#e00f88", "#efasdad"],
    stocks: 12,
    cover: "url_cover_photos",
    photos: ["url_photo"],
  },
  {
    name: "Autumun Dress",
    status: "need to confirm",
    price: 200000,
    category: ["woman", "casual"],
    size: ["L", "M", "XL"],
    color: ["#e00f88", "#efasdad"],
    stocks: 12,
    cover: "url_cover_photos",
    photos: ["url_photo"],
  },
  {
    name: "Cocomelon Shirt",
    status: "need to confirm",
    price: 100000,
    category: ["kids", "casual"],
    size: ["L", "M", "XL", "XXL"],
    color: ["#e00f88", "#efasdad"],
    stocks: 12,
    cover: "url_cover_photos",
    photos: ["url_photo"],
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
