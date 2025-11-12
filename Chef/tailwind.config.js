/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#121212",
        primary: "#f97316",
        secondary: "#10b981",
      },
    },
  },
  plugins: [],
};
