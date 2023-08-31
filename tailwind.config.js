/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
        multi:"multi"
      }
    },
  },
  plugins: [],
}