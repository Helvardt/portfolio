/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      // If you want the container to have its own breakpoint widths:
      // screens: { '2xl': '1400px' },
    },
    // These are the global Tailwind breakpoints (optional to customize)
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      // 2xl: "1400px", // add if you want a 2xl breakpoint too
    },
    fontFamily: {
      primary: "var(--font-JetBrainsMono)", // make sure this CSS var exists
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
