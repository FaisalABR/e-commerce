/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "my-navy": "#11102c",
        "my-grey": "#F2F3F7",
        "my-red": "#CC0E01",
        "dark-grey": "#9e9ea3",
      },
    },
  },
  plugins: [],
};
