/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bkg: "rgba(var(--bkg), <alpha-value>)",
        content: "rgb(var(--content))",
        info: "rgba(var(--bkg-info), <alpha-value>)",
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};
