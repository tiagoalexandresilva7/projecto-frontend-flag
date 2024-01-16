/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#424769",
        secondary: "#7077A1",
        accent: "#F6B17A",
        background: "#2D3250",
        textcolor: "#FDE0CB",
      },
    },
  },
  plugins: [],
};
