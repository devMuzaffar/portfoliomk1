import type { Config } from "tailwindcss";

const primary = "#3b82f6";
const secondary = "#f43f5e";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        primary,
        secondary,
      },
      colors: {
        primary,
        secondary,
      },
      backgroundColor: {
        primary,
        "primary-dark": "#030712",
      },
    },
  },
  plugins: [],
} satisfies Config;
