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
      backgroundImage: {
        "currated-men": "url('../public/images/currated/currated-men.jpg')",
        "currated-women": "url('../public/images/currated/currated-women.jpg')",
        "currated-kids": "url('../public/images/currated/currated-kids.jpg')",
        "currated-casual":
          "url('../public/images/currated/currated-seller.jpg')",
      },
    },
  },
  plugins: [],
};
