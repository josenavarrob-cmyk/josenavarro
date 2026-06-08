import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#fcfcfa",
        muted: "#5f5f5f",
        line: "#e7e7e3"
      },
      maxWidth: {
        reading: "70ch"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
