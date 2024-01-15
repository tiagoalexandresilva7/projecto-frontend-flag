/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#393E46", // navbar, hero, footer
        secondary: "#00ADB5", // cards
        accent: "#EEEEEE", // buttons, links
        background: "#222831",
      },
    },
  },
  plugins: [],
};
