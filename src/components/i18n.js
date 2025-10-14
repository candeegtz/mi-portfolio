import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Traducciones de NavBar
        home: "Home",
        contact: "Contact me",
        proyects: "My projects",
        pUni: "University Projects",
        pPersonal: "Personal Projects",

        // Traducciones de Banner
        welcome: "Welcome to my portfolio!",
        iam: "Hi, I'm Candela and I'm a ",
        intro: "Final-year Software Engineering student at the University of Seville, highly motivated to expand my knowledge in the fields of Artificial Intelligence (AI) and Software as a Service (SaaS) development and design",
        button: "Let's connect",
        rotatingTexts: ["Web Developer", "Web Designer", "SaaS Developer"],
        cv: "Download CV",

        // Traducciones de UniversityProyect
        title: "University Projects",
        introUP: "Throughout my university career, I have had the opportunity to work on various projects that have allowed me to apply and deepen my knowledge in software development. Below, I present a selection of the most outstanding ones.",
        descriptionSkullKing: "A digital version of the 'Skull King' card game",
        descriptionNewsAnalysis: "description analysis",

        // Traducciones de ProjectPage
        techTitle: "Technologies Used",
        galleryTitle: "Project Gallery",

        // Traducciones de Skull King
        skullKingIntro: "This project is a digital adaptation of the popular card game 'Skull King'. It was developed as part of the 'Language Processors' course, where the main goal was to create a domain-specific language (DSL) with ANTLR to define the game's rules and logic. The graphical interface was implemented with Java Swing."
        
      }
    },
    es: {
      translation: {
        // Traducciones de NavBar
        home: "Inicio",
        contact: "Contáctame",
        proyects: "Mis proyectos",
        pUni: "Proyectos universitarios",
        pPersonal: "Proyectos personales",

        // Traducciones de Banner
        welcome: "¡Bienvenido/a a mi portfolio!",
        iam: "Hola, mi nombre es Candela y soy ",
        intro: "Estudiante de último año de Ingeniería Software en la Universidad de Sevilla interesada en ampliar mis conocimientos en el campo de inteligencia artificial y desarrollo y diseño de SaaS.",
        button: "Contáctame",
        rotatingTexts: ["Desarrolladora Web", "Diseñadora Web", "Desarrolladora de SaaS"],
        cv: "Descargar CV",

        // Traducciones de UniversityProyect
        title: "Proyectos Universitarios",
        introUP: "A lo largo de mi carrera universitaria, he tenido la oportunidad de trabajar en diversos proyectos que me han permitido aplicar y profundizar mis conocimientos en desarrollo de software. A continuación, presento una selección de los más destacados.",
        descriptionSkullKing: "Una versión digital del juego de cartas 'Skull King'.",
        descriptionNewsAnalysis:"Análisis de sentimiento de noticias en español.",
        descriptionAcmeAns: "Proyecto AcmeAns",

        // Traducciones de ProjectPage
        techTitle: "Tecnologías Empleadas",
        galleryTitle: "Galería del Proyecto",

        // Traducciones de Skull King
        skullKingIntro: "Este proyecto es una adaptación digital del popular juego de cartas 'Skull King'. Fue desarrollado como parte de la asignatura 'Procesadores de Lenguajes', donde el objetivo principal era crear un lenguaje específico de dominio (DSL) con ANTLR para definir las reglas y la lógica del juego. La interfaz gráfica se implementó con Java Swing.",
        // Traducciones de 

      }
    }
  },
  lng: "es", // idioma inicial
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
