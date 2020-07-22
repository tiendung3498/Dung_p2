import i18n from "i18next";
import dataText from './dataText.json'
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    lng: 'vi',
    resources: {
      vi: {
        common:dataText
      }
    },
    fallbackLng: "vi",
    debug: true,


    interpolation: {
      escapeValue: false
    }
  });

export default i18n;