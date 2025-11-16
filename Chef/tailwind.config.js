/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
    floating: {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-12px)" },
      "100%": { transform: "translateY(0px)" },
    },
  },
  animation: {
    floating: "floating 3s ease-in-out infinite",
  },
      colors: {
        darkbg: "#121212",
        primary: "#f97316",
        secondary: "#10b981",
      },
      
    },
  },
  plugins: [],
};
