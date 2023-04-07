/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },

      colors: {
        cardTextGrey: "#415968",
        pinkTag: "#F59CA0",
        blueTag: "#55B8CA",
        yellowTag: "#F2BC28",
        yellowBar: "#F2BC29",
        todoAssignment: "#F2BC28",
        todoTest: "#F59CA0",
        progressBlue: "#BDDFF5",
        progressPink: "#F59CA0",
        progressOrange: "#55B8CA",
        grayishLine: "#E2E4E5",
        primaryDarkBlue: "#415968",
        grey1: "#DBDBDB",
        lightCyan: "#A2A6A8",
      },
    },
  },
  plugins: [],
};
