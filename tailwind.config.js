/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#333",
        differentColor: "#8c8c8c",
      },
    },
  },
  plugins: [],
};
