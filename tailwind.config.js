/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./renderer/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("@tailwindcss/typography")],
};
