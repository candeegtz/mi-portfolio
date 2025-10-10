import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my portfolio!",
        iam: "Hi, I'm Candela and I'm a ",
        intro: "Final-year Software Engineering student at the University of Seville, highly motivated to expand my knowledge in the fields of Artificial Intelligence (AI) and Software as a Service (SaaS) development and design",
        button: "Let's connect",
        rotatingTexts: ["Web Developer", "Web Designer", "SaaS Developer"]
      }
    },
    es: {
      translation: {
        welcome: "¡Bienvenido/a a mi portfolio!",
        iam: "Hola, mi nombre es Candela y soy ",
        intro: "Estudiante de último año de Ingeneiería Software en la Universidad de Sevilla interesada en ampliar mis conocimientos en el campo de inteligencia artificial y desarrollo y diseño de SaaS.",
        button: "Contáctame",
        rotatingTexts: ["Desarrolladora Web", "Diseñadora Web", "Desarrolladora de SaaS"]
      }
    }
  },
  lng: "es", // idioma inicial
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
