/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "hanken-grotesk": "'Hanken Grotesk', sans-serif",
      },
      colors: {
        "grad-container": {
          100: "#7857ff",
          200: "#2e2be9",
        },
        "grad-circle": {
          100: "#4e21ca",
          200: "#2421ca00",
        },
        summary: "#303b5a",
        "red-box": "#ff5757",
        "orange-box": "#ffb01f",
        "green-box": "#00bd91",
        "blue-box": "#1125d4",
        "grad-btn": {
          100: "#7857ff",
          200: "#2e2be9",
        },
      },
    },
  },
  plugins: [],
};
