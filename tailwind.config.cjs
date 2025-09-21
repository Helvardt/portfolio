/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "15px" },
    extend: {
      colors: {
        primary: "#0B1220",
        accent: "#18E299",
      },
      fontFamily: {
        primary: "var(--font-jetbrains-mono)",
      },
    },
  },
  plugins: [],
};
