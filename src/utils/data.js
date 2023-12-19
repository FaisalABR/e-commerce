export let IDR = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
});

export const curratedData = [
  {
    id: 1,
    curracy: "Shop Men",
    path: "/products/men",
    imageClass: "bg-currated-men",
  },
  {
    id: 2,
    curracy: "Shop Women",
    path: "/products/women",
    imageClass: "bg-currated-women",
  },
  {
    id: 3,
    curracy: "Casual",
    path: "/products/casual",
    imageClass: "bg-currated-casual",
  },
  {
    id: 4,
    curracy: "Shop Kids",
    path: "/products/men",
    imageClass: "bg-currated-kids",
  },
];

export const serviceData = [
  {
    id: 1,
    title: "Original Products",
    description:
      "We provide money back guarantee if the product are not original",
    icon: "diamond",
  },
  {
    id: 2,
    title: "Satisfaction Guarantee",
    description: "Exchange the product you've purchased if it doesn't fit you",
    icon: "smile",
  },
  {
    id: 3,
    title: "New Arrival Everyday",
    description: "We updates our collections almost everyday",
    icon: "warehouse",
  },
  {
    id: 4,
    title: "Fast and Free Shipping",
    description: "We offer fast and free shipping for our loyal customers",
    icon: "truck",
  },
];

export const cartBreadcrumbs = [
  {
    id: 1,
    displayName: "Home",
    linkNav: "/",
  },
];

export const balanceBreadcrumbs = [
  {
    id: 1,
    displayName: "Home",
    linkNav: "/",
  },
];

export const catalogBreadcrumbs = [
  {
    id: 1,
    displayName: "Home",
    linkNav: "/",
  },
];

export const detailBreadcrumbs = [
  {
    id: 1,
    displayName: "Home",
    linkNav: "/",
  },
  {
    id: 2,
    displayName: "All Products",
    linkNav: "/products",
  },
];

export const dataProduct = [
  {
    id: 1,
    name: "casual shirt",
    status: "need to confirm",
    price: 150000,
    category: ["man", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 12,
    imageUrl: "products/product-1.jpg",
  },
  {
    id: 2,
    name: "women's casual shirt 1",
    status: "need to confirm",
    price: 120000,
    category: ["women", "casual"],
    size: [
      { id: 1, size: "M" },
      { id: 2, size: "L" },
      { id: 3, size: "XL" },
    ],
    color: [
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 15,
    imageUrl: "products/product-2.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 8,
    imageUrl: "products/product-3.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 12,
    imageUrl: "products/product-4.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 10,
    imageUrl: "products/product-5.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 15,
    imageUrl: "products/product-6.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 8,
    imageUrl: "products/product-7.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 12,
    imageUrl: "products/product-8.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 10,
    imageUrl: "products/product-9.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 15,
    imageUrl: "products/product-10.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 8,
    imageUrl: "products/product-11.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 12,
    imageUrl: "products/product-12.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 10,
    imageUrl: "products/product-13.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 15,
    imageUrl: "products/product-14.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 8,
    imageUrl: "products/product-15.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 12,
    imageUrl: "products/product-16.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 10,
    imageUrl: "products/product-17.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 15,
    imageUrl: "products/product-18.jpg",
  },
  {
    id: 19,
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 15,
    imageUrl: "products/product-19.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 12,
    imageUrl: "products/product-20.jpg",
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
      { id: 1, color: "#FFD89C" },
      { id: 2, color: "#9BCDD2" },
    ],
    stocks: 8,
    imageUrl: "products/product-21.jpg",
  },
];
