const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    colors: {
      // brand: "#F6DC3B",
      brand: "#FEA82F",
      dark: "#18181B",
      mid: "#E4E4E7",
      light: "#F8FAFC",
      white: "#FFFFFF",
      accent: "#1A8BFF",
    },
  },
  plugins: [],
}