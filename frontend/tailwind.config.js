/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-1": "32px",
        "heading-2": "24px",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        primaryBlue: "#94B1EC",
        highlightBrick: "#D18F83",
        primaryGreen: "#9CD950",
        abnormalRed: "#E3644D",
        mediumYellow: "#E3C24D",
        normalGreen: "#3FCB45",
        paleBlue: "#EDF6FF",
        suppGreen: "#E4FFD7",
        suppOrange: "#FFEDD2",
        grey: "#494949",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
