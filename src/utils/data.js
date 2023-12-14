export let IDR = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
  maximumSignificantDigits: 3,
});

export const curratedData = [
  {
    id: 1,
    curracy: "Shop Men",
    path: "/products/men",
  },
  {
    id: 2,
    curracy: "Shop Women",
    path: "/products/women",
  },
  {
    id: 3,
    curracy: "Casual",
    path: "/products/casual",
  },
  {
    id: 4,
    curracy: "Best Seller",
    path: "/products/men",
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
