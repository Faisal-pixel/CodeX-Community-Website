/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FEFEFE",
        primaryBlack: "#020203",
        primaryPrismarine: "#53B3CB",
        bgBlue: "#53B3CB",
        textGrey: "#3D3A3D",
      },
      height: {
        '100' : "30rem",
      }
    },
  },
  plugins: [],
};

