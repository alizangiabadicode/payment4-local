import type { Config } from "tailwindcss";
type ColorObject = {
  [key: string]: string;
};

export const tailwindColors: ColorObject = {
  current: "currentColor",
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#121212",
  dark: "#0B0B0E",
  primary: "#864AFF",
  "primary-content": "#FFFFFF",
  "primary-focus": "#BA99FF",
  "primary-text": "#1212125C",
  "secondary-text": "#00000070",
  "text-main": "var(--text-main)",
  neutral: "#2a323c",
};
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: tailwindColors,
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "light-gradient":
          "linear-gradient(to right, #F1EAFF, #f6f2ff, #F1EAFF)",
        "light-gradient-card":
          "linear-gradient(to bottom right, #F1EAFF, white, #F1EAFF)",
        "dark-gradient-card":
          "linear-gradient(to bottom right, #252132, #1C1A22, #18181A)",
        "light-gradient-ad-card":
          "linear-gradient(to right, white, #F1EAFF, white)",
        "dark-gradient-ad-card":
          "linear-gradient(to right, #0d0d0f, #16141e, #0d0d0f)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
