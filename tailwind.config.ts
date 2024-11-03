import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "spoqa-regular": ["var(--font-spoqa-regular)", "sans-serif"],
        "spoqa-thin": ["var(--font-spoqa-thin)", "sans-serif"],
        "spoqa-bold": ["var(--font-spoqa-bold)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
