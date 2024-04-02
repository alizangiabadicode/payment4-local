/** @type {import('tailwindcss').Config} */
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
  // secondary: "#6c5ce7",
  // "secondary-content": "#FFFFFF",
  // "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
  // accent: "#1FB2A5",
  // "accent-content": "#FFFFFF",
  // "accent-focus": generateDarkenColorFrom("#1FB2A5"),
  neutral: "#2a323c",
  // "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  // "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  // "base-25": "#353d47",
  // "base-50": "#2a323c",
  // "base-75": "#20272e",
  // "base-100": "#1d232a",
  // "base-200": "#191e24",
  // "base-300": "#15191e",
  // "base-content": "#A6ADBB",
  // info: "#3abff8",
  // "info-content": generateForegroundColorFrom("#3abff8"),
  // success: "#36d399",
  // "success-content": generateForegroundColorFrom("#36d399"),
  // warning: "#fbbd23",
  // "warning-content": generateForegroundColorFrom("#fbbd23"),
  // error: "#f87272",
  // "error-content": generateForegroundColorFrom("#f87272"),
  // "gradient-first": "#34eaa0",
  // "gradient-second": "#0fa2e9",
};
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: tailwindColors,
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      maxWidth: {
        "690": "690px",
      },
      width: {
        card: "843px",
        "mobile-card": "345px",
      },
      height: {
        card: "417px",
        "mobile-card": "526px",
      },
      fontSize: {
        xl: "40px",
        md: "20px",
        "24": "24px",
        "16": "16px",
      },
      backgroundImage: {
        "light-card": "url('../images/bg-light-card.jpg')",
        "dark-card": "url('../images/bg-dark-card.png')",
        "mobile-light-card": "url('../images/mobile-bg-light-card.jpg')",
        "mobile-dark-card": "url('../images/mobile-bg-dark-card.jpg')",
        "advertisement-card": "url('../images/advertisement-bg-img.jpg')",
        "advertisement-card-dark":
          "url('../images/advertisement-bg-dark-img.png')",
        "mobile-advertisement-card":
          "url('../images/advertisement-bg-mobile-img.jpg')",
        "mobile-advertisement-card-dark":
          "url('../images/advertisement-bg-mobile-dark-img.png')",
        "contacts-light": "url('../images/bg-contacts.png')",
        "contacts-dark": "url('../images/bg-contacts-dark.png')",
        "contacts-form-light": "url('../images/contact-form.png')",
        "contacts-form-dark": "url('../images/contact-form-dark.png')",
        "about-us-light": "url('../images/bg-about-us-light.png')",
        "about-us-mobile-light":
          "url('../images/bg-about-us-mobile-light.png')",
        "about-us-dark": "url('../images/bg-about-us-dark.png')",
        "about-us-mobile-dark": "url('../images/bg-about-us-mobile-dark.png')",
        "contacts-form-mobile-dark":
          "url('../images/contact-form-mobile-dark.png')",
        "contacts-form-mobile-light":
          "url('../images/contact-form-mobile-light.png')",
        "light-gradient":
          "linear-gradient(to right, #F1EAFF, #f6f2ff, #F1EAFF)",
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
