/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#526D82", // navbar, hero, footer
        secondary: "#9DB2BF", // cards
        accent: "#DDE6ED", // buttons, links
        background: "#27374D",
      },
    },
  },
  plugins: [],
};
