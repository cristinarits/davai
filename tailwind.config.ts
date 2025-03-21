import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        davai: "#7a3b69",
      },
    },
  },
  plugins: [],
};

export default config;