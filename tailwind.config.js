/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
        center: true,
        padding: "15px",
    },
    screens: {
        sm: '640px'  
        md: '768px'  
        lg: '960px'  
        xl: '1200px'  
    },
    fontFamily: {
        primary: "var(--font-JetBrainsMono)",
    }
    extend: {
        keyframes: {
            "accordion-down": {
                from: { height: "0"},
                to: { height: "var(--radix-accordion-content-height" },
            },
        }
    },
  },
  plugins: [],
};
