/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09429A",
        active: "#E2287B",
        gray: "#B4B4B4",
      },
      backgroundImage: {
        horizontalGradient:
          "linear-gradient(90deg, rgba(239,126,192,1) 0%, rgba(235,102,172,1) 23%, rgba(226,40,123,1) 96%, rgba(225,31,116,1) 100%)",
        verticalGradient:
          "linear-gradient(190deg, rgba(239,126,192,1) 0%, rgba(235,102,172,1) 23%, rgba(226,40,123,1) 96%, rgba(225,31,116,1) 100%);",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "arrowAnimation": "arrowAnimation 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
