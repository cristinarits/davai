import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          purple: "#7a3b69",
          yellow: "#fcba04",
          lightGray: "#e5dada",
          darkBlue: "#02040f",
        },
      },
    },
  },
  plugins: [],
};

export default config;