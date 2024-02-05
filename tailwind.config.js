/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors:{
      "bordercolor":"#d3d3d3",
      "background-color":"rgb(248, 248, 248)",
      "bgcolor":"rgba(0, 0, 0, 0.05)",
      "txtcolor":"rgb(96, 96, 96)",
      "white":"#fff",
      "black":"#000",
      "bcolor":"rgba(0,0,0,0.1)",
    },
    extend: {},
  },
  plugins: [],
}

