/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FEFEFE",
        primaryBlack: "#020203",
        primaryPrismarine: "#53B3CB"
      }
    },
  },
  plugins: [],
}

