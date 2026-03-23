/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        ink: "#07111f",
        mist: "#c6d4e1",
        signal: "#ff7a59",
        tide: "#8ce0d4",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(10, 22, 44, 0.35)",
      },
    },
  },
  plugins: [],
};
