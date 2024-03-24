/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
      colors: {
        primary: "#5138E6"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
}