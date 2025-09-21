/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "15px" },
    extend: {
      colors: {
        primary: "oklch(37.3% 0.034 259.733)",
        accent: "#fdba74",
      },
      fontFamily: {
        primary: "var(--font-jetbrains-mono)",
      },
    },
  },
  plugins: [],
};
