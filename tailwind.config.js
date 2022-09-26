/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "ui-sans-serif": ["ui-sf", "sans-serif"],
        "ui-sf-light": ["ui-sf-light", "sans-serif"],
      },
      colors: {
        "semi-gray": "#222222",
        "gray-light": "#F4F4F4",
      },
      screens: {
        xsm: { max: "768px" },
      },
    },
  },
  plugins: [],
};
