/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "ui-sans-serif": ["ui-sf", "sans-serif"],
        "ui-sf-light": ["ui-sf-light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
