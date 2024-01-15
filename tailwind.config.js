/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-blue": "#1B262C",
        charcoal: "#0F4C75",
        asphalt: "#3282B8",
        "shadow-grey": "#BBE1FA",
      },
    },
  },
  plugins: [],
};
