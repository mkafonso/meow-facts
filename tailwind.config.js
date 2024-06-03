/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans"],
      },
      colors: {
        main: {
          500: "#22223B",
          400: "#4A4E69",
          300: "#9A8C98",
          200: "#C9ADA7",
          100: "#F2E9E4",
        },
      },
    },
  },
  plugins: [],
};
