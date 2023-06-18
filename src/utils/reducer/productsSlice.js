import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Casual Shirt",
    status: "need to confirm",
    price: 150000,
    category: ["man", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 12,
    cover: "url_cover_photos",
    photos: ["url_photo"],
  },
  {
    id: 2,
    name: "Women's Casual Shirt 1",
    status: "need to confirm",
    price: 120000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 15,
    cover: "url_cover_photos_2",
    photos: ["url_photo_2"],
  },
  {
    id: 3,
    name: "Men's Casual Shirt 2",
    status: "need to confirm",
    price: 140000,
    category: ["men", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 8,
    cover: "url_cover_photos_3",
    photos: ["url_photo_3"],
  },
  {
    id: 4,
    name: "Women's Casual Shirt 2",
    status: "need to confirm",
    price: 90000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 12,
    cover: "url_cover_photos_4",
    photos: ["url_photo_4"],
  },
  {
    id: 5,
    name: "Men's Casual Shirt 3",
    status: "need to confirm",
    price: 170000,
    category: ["men", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 10,
    cover: "url_cover_photos_5",
    photos: ["url_photo_5"],
  },
  {
    id: 6,
    name: "Women's Casual Shirt 3",
    status: "need to confirm",
    price: 80000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 15,
    cover: "url_cover_photos_6",
    photos: ["url_photo_6"],
  },
  {
    id: 7,
    name: "Men's Casual Shirt 4",
    status: "need to confirm",
    price: 190000,
    category: ["men", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 8,
    cover: "url_cover_photos_7",
    photos: ["url_photo_7"],
  },
  {
    id: 8,
    name: "Women's Casual Shirt 4",
    status: "need to confirm",
    price: 95000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 12,
    cover: "url_cover_photos_8",
    photos: ["url_photo_8"],
  },
  {
    id: 9,
    name: "Men's Casual Shirt 5",
    status: "need to confirm",
    price: 160000,
    category: ["men", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 10,
    cover: "url_cover_photos_9",
    photos: ["url_photo_9"],
  },
  {
    id: 10,
    name: "Women's Casual Shirt 5",
    status: "need to confirm",
    price: 100000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 15,
    cover: "url_cover_photos_10",
    photos: ["url_photo_10"],
  },
  {
    id: 11,
    name: "Men's Casual Shirt 6",
    status: "need to confirm",
    price: 175000,
    category: ["men", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 8,
    cover: "url_cover_photos_11",
    photos: ["url_photo_11"],
  },
  {
    id: 12,
    name: "Women's Casual Shirt 6",
    status: "need to confirm",
    price: 85000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 12,
    cover: "url_cover_photos_12",
    photos: ["url_photo_12"],
  },
  {
    id: 13,
    name: "Men's Casual Shirt 7",
    status: "need to confirm",
    price: 185000,
    category: ["men", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 10,
    cover: "url_cover_photos_13",
    photos: ["url_photo_13"],
  },
  {
    id: 14,
    name: "Women's Casual Shirt 7",
    status: "need to confirm",
    price: 110000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 15,
    cover: "url_cover_photos_14",
    photos: ["url_photo_14"],
  },
  {
    id: 15,
    name: "Men's Casual Shirt 8",
    status: "need to confirm",
    price: 195000,
    category: ["men", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 8,
    cover: "url_cover_photos_15",
    photos: ["url_photo_15"],
  },
  {
    id: 16,
    name: "Women's Casual Shirt 8",
    status: "need to confirm",
    price: 90000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 12,
    cover: "url_cover_photos_16",
    photos: ["url_photo_16"],
  },
  {
    id: 17,
    name: "Men's Casual Shirt 9",
    status: "need to confirm",
    price: 165000,
    category: ["men", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 10,
    cover: "url_cover_photos_17",
    photos: ["url_photo_17"],
  },
  {
    id: 18,
    name: "Women's Casual Shirt 9",
    status: "need to confirm",
    price: 95000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 15,
    cover: "url_cover_photos_18",
    photos: ["url_photo_18"],
  },
  {
    id: 18,
    name: "Women's Casual Shirt 9",
    status: "need to confirm",
    price: 95000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 15,
    cover: "url_cover_photos_18",
    photos: ["url_photo_18"],
  },
  {
    id: 20,
    name: "Women's Casual Shirt 10",
    status: "need to confirm",
    price: 100000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 12,
    cover: "url_cover_photos_20",
    photos: ["url_photo_20"],
  },
  {
    id: 21,
    name: "Kids' Casual Shirt 1",
    status: "need to confirm",
    price: 90000,
    category: ["kids", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#e00f88" },
      { id: 2, color: "#efasdad" },
    ],
    stocks: 8,
    cover: "url_cover_photos_4",
    photos: ["url_photo_4"],
  },

  // {
  //   id: 2,
  //   name: "Autumun Dress",
  //   status: "need to confirm",
  //   price: 200000,
  //   category: ["woman", "casual"],
  //   size: ["L", "M", "XL"],
  //   color: ["#e00f88", "#efasdad"],
  //   stocks: 12,
  //   cover: "url_cover_photos",
  //   photos: ["url_photo"],
  // },
  // {
  //   id: 3,
  //   name: "Cocomelon Shirt",
  //   status: "need to confirm",
  //   price: 100000,
  //   category: ["kids", "casual"],
  //   size: ["L", "M", "XL", "XXL"],
  //   color: ["#e00f88", "#efasdad"],
  //   stocks: 12,
  //   cover: "url_cover_photos",
  //   photos: ["url_photo"],
  // },
  // {
  //   id: 4,
  //   name: "Casual Shirt 1",
  //   price: 120000,
  //   category: ["woman", "casual"],
  //   size: ["L", "M", "XL"],
  //   color: ["#e00f88", "#efasdad"],
  //   stocks: 10,
  //   cover: "url_cover_photos_1",
  //   photos: ["url_photo_1"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 5,
  //   name: "Man's T-Shirt 1",
  //   price: 80000,
  //   category: ["man", "casual"],
  //   size: ["M", "L"],
  //   color: ["#4d4d4d", "#ffffff"],
  //   stocks: 15,
  //   cover: "url_cover_photos_2",
  //   photos: ["url_photo_2"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 6,
  //   name: "Kids' Dress 1",
  //   price: 150000,
  //   category: ["kids", "casual"],
  //   size: ["S", "M", "L"],
  //   color: ["#ff6699", "#33ccff"],
  //   stocks: 8,
  //   cover: "url_cover_photos_3",
  //   photos: ["url_photo_3"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 7,
  //   name: "woman's Blouse 1",
  //   price: 100000,
  //   category: ["woman", "casual"],
  //   size: ["S", "M", "L", "XL"],
  //   color: ["#ffcc00", "#000000"],
  //   stocks: 20,
  //   cover: "url_cover_photos_4",
  //   photos: ["url_photo_4"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 8,
  //   name: "Casual Shirt 2",
  //   price: 90000,
  //   category: ["woman", "casual"],
  //   size: ["M", "L"],
  //   color: ["#336699", "#ffffff"],
  //   stocks: 12,
  //   cover: "url_cover_photos_5",
  //   photos: ["url_photo_5"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 9,
  //   name: "Casual Shirt 2",
  //   price: 90000,
  //   category: ["woman", "casual"],
  //   size: ["M", "L"],
  //   color: ["#336699", "#ffffff"],
  //   stocks: 12,
  //   cover: "url_cover_photos_5",
  //   photos: ["url_photo_5"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 10,
  //   name: "Men's Polo Shirt 1",
  //   price: 140000,
  //   category: ["men", "casual"],
  //   size: ["S", "M", "L"],
  //   color: ["#002633", "#ffcc00"],
  //   stocks: 18,
  //   cover: "url_cover_photos_6",
  //   photos: ["url_photo_6"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 11,
  //   name: "Kids' T-Shirt 1",
  //   price: 75000,
  //   category: ["kids", "casual"],
  //   size: ["XS", "S", "M"],
  //   color: ["#ff99cc", "#ffff00"],
  //   stocks: 10,
  //   cover: "url_cover_photos_7",
  //   photos: ["url_photo_7"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 12,
  //   name: "Women's Dress 1",
  //   price: 180000,
  //   category: ["women", "casual"],
  //   size: ["S", "M", "L"],
  //   color: ["#ff0066", "#0000ff"],
  //   stocks: 15,
  //   cover: "url_cover_photos_8",
  //   photos: ["url_photo_8"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 13,
  //   name: "Casual Shirt 3",
  //   price: 110000,
  //   category: ["women", "casual"],
  //   size: ["M", "L", "XL"],
  //   color: ["#ffcc00", "#333333"],
  //   stocks: 7,
  //   cover: "url_cover_photos_9",
  //   photos: ["url_photo_9"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 14,
  //   name: "Men's T-Shirt 2",
  //   price: 85000,
  //   category: ["men", "casual"],
  //   size: ["L", "XL"],
  //   color: ["#0099cc", "#cccccc"],
  //   stocks: 9,
  //   cover: "url_cover_photos_10",
  //   photos: ["url_photo_10"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 15,
  //   name: "Kids' Dress 2",
  //   price: 160000,
  //   category: ["kids", "casual"],
  //   size: ["M", "L"],
  //   color: ["#ff6699", "#ff9933"],
  //   stocks: 11,
  //   cover: "url_cover_photos_11",
  //   photos: ["url_photo_11"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 16,
  //   name: "Women's Blouse 2",
  //   price: 95000,
  //   category: ["women", "casual"],
  //   size: ["S", "M", "L"],
  //   color: ["#ff99cc", "#660066"],
  //   stocks: 14,
  //   cover: "url_cover_photos_12",
  //   photos: ["url_photo_12"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 17,
  //   name: "Casual Shirt 4",
  //   price: 130000,
  //   category: ["women", "casual"],
  //   size: ["S", "M", "L", "XL"],
  //   color: ["#336699", "#ffffff"],
  //   stocks: 6,
  //   cover: "url_cover_photos_13",
  //   photos: ["url_photo_13"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 18,
  //   name: "Men's Polo Shirt 2",
  //   price: 120000,
  //   category: ["men", "casual"],
  //   size: ["M", "L"],
  //   color: ["#4d4d4d", "#cccccc"],
  //   stocks: 16,
  //   cover: "url_cover_photos_14",
  //   photos: ["url_photo_14"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 19,
  //   name: "Kids' T-Shirt 2",
  //   price: 90000,
  //   category: ["kids", "casual"],
  //   size: ["XS", "S", "M"],
  //   color: ["#ff0066", "#ffcc00"],
  //   stocks: 13,
  //   cover: "url_cover_photos_15",
  //   photos: ["url_photo_15"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 20,
  //   name: "Women's Dress 2",
  //   price: 170000,
  //   category: ["women", "casual"],
  //   size: ["S", "M", "L"],
  //   color: ["#ff6699", "#0000ff"],
  //   stocks: 8,
  //   cover: "url_cover_photos_16",
  //   photos: ["url_photo_16"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 21,
  //   name: "Casual Shirt 5",
  //   price: 105000,
  //   category: ["women", "casual"],
  //   size: ["M", "L", "XL"],
  //   color: ["#ffcc00", "#ff6699"],
  //   stocks: 9,
  //   cover: "url_cover_photos_17",
  //   photos: ["url_photo_17"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 22,
  //   name: "Men's T-Shirt 3",
  //   price: 95000,
  //   category: ["men", "casual"],
  //   size: ["L", "XL"],
  //   color: ["#336699", "#ffcc00"],
  //   stocks: 11,
  //   cover: "url_cover_photos_18",
  //   photos: ["url_photo_18"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 23,
  //   name: "Kids' Dress 3",
  //   price: 145000,
  //   category: ["kids", "casual"],
  //   size: ["M", "L"],
  //   color: ["#ff9933", "#333333"],
  //   stocks: 10,
  //   cover: "url_cover_photos_19",
  //   photos: ["url_photo_19"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 24,
  //   name: "Women's Blouse 3",
  //   price: 90000,
  //   category: ["women", "casual"],
  //   size: ["S", "M", "L"],
  //   color: ["#ff99cc", "#ffcc00"],
  //   stocks: 17,
  //   cover: "url_cover_photos_20",
  //   photos: ["url_photo_20"],
  //   status: "need to confirm",
  // },
  // {
  //   id: 25,
  //   name: "Casual Shirt 6",
  //   price: 115000,
  //   category: ["women", "casual"],
  //   size: ["M", "L", "XL"],
  //   color: ["#ffcc00", "#000000"],
  //   stocks: 8,
  //   cover: "url_cover_photos_21",
  //   photos: ["url_photo_21"],
  //   status: "need to confirm",
  // },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
