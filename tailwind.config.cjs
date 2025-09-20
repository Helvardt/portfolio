/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "15px" },
    // Use Tailwind's default screens (sm 640, md 768, lg 1024, xl 1280, 2xl 1536)
    // (remove your custom screens so tutorials' breakpoints match)
    extend: {
      colors: {
        primary: "#0b0b0f", // darker than before (feel free to adjust)
        accent: "#00ff99",
        "accent-hover": "#00e187",
      },
      fontFamily: {
        // we'll map to the next/font variable below
        primary: "var(--font-jetbrains-mono)",
      },
    },
  },
  plugins: [], // keep empty for now
};
