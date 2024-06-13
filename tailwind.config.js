/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}","./main.js","./assets/**/*.css"],
  theme: {
      extend: {
          colors: {
              primary: "#17AF26",
              secondary: "#05422C",
              "neutral-400": "#F4F4F4",
          },
          backgroundColor:{
            primary: "#17AF26",
          },
          backgroundSize: {
              "50%": "50%",
          },
      },
  },
  plugins: [],
};