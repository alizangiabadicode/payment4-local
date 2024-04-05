import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationTR from "./locales/tr/translation.json";
import translationES from "./locales/es/translation.json";
import translationAR from "./locales/ar/translation.json";
import translationFA from "./locales/fa/translation.json";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fa: {
        translation: translationFA,
      },
      ar: {
        translation: translationAR,
      },
      fr: {
        translation: translationFR,
      },
      tr: {
        translation: translationTR,
      },
      es: {
        translation: translationES,
      },
    },
    // lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
