/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "15px" },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: "#00ff99",
      },
      fontFamily: {
        primary: "var(--font-jetbrains-mono)",
      },
    },
  },
  plugins: [],
};
