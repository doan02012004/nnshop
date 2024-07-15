/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}","./main.js","./assets/**/*.css"],
  theme: {
      extend: {
          colors: {
              primary: "#17AF26",
              secondary: "#05422C",
              neutral: "#F4F4F4",
              tertiary: '#9D9EA2'
          },
          backgroundColor:{
            primary: "#17AF26",
            secondary: "#F3FBF4"
          },
          backgroundSize: {
              "50%": "50%",
          },
      },
  },
  plugins: [],
};