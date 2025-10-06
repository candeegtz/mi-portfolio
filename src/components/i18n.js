import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my portfolio!",
        iam: "Hi, I'm Candela and I'm a ",
        intro: "Something as an introduction",
        button: "Let's connect",
        rotatingTexts: ["Web Developer", "Web Designer", "UI/UX Designer"]
      }
    },
    es: {
      translation: {
        welcome: "¡Bienvenido/a a mi portfolio!",
        iam: "Hola, mi nombre es Candela y soy ",
        intro: "Lo que sea como una introducción",
        button: "Contáctame",
        rotatingTexts: ["Desarrollador Web", "Diseñador Web", "UI/UX Designer"]
      }
    }
  },
  lng: "es", // idioma inicial
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
