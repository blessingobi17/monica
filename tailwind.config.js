/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Orangee: "hsla(35, 87%, 49%, 1)",
      LightOrange: "rgb(235, 167, 72)",
      Blackk: "hsla(127, 8%, 22%, 1)",
      Creamm: "hsla(39, 93%, 95%, 1)",
      Background: "rgb(26, 25, 25)",
      Ash: "rgb(125, 126, 126)",
    },
    fontFamily: {
      roboto: "Roboto Flex, sans-serif",
      dmSerif: "DM Serif Display, Serif",
    },
    extend: {},
  },
  plugins: [],
};
