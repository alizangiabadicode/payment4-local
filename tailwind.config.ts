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
      screens: {
        xs: "420 px",
        x: "857px",
      },
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
        "dark-gradient-social-networks":
          "linear-gradient(to right, #2A2338, #18181A, #18181A,  #2A2338)",
        "light-gradient-social-networks":
          "linear-gradient(to right, #EFE5FE, #F7F5FF, #F7F5FF,  #EFE5FE)",
        "dark-gradient-sidebar-post":
          "linear-gradient(to bottom right, #151518, #151518,#262033)",
        "light-gradient-sidebar-post":
          "linear-gradient(to bottom right, #F5F1FF, #FAF7FF,#F3EAFE)",
        "light-gradient-sidebar-post-rtl":
          "linear-gradient(to bottom left, #F5F1FF, #FAF7FF,#F3EAFE)",
        "dark-gradient-sidebar-post-rtl":
          "linear-gradient(to bottom left, #151518,#151518, #262033)",
      },
      boxShadow: {
        "custom-light":
          "0px 4px 4px 0px rgba(199, 211, 214, 0.5), 0px -2px 4px 0px rgba(199, 211, 214, 0.25)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
