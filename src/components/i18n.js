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
            intro: "Final-year Software Engineering student at the University of Seville, highly motivated to expand my knowledge in the fields of Artificial Intelligence (AI) and Software as a Service (SaaS) development and design.",
            button: "Contact me",
            rotatingTexts: ["Web Developer", "Web Designer", "SaaS Developer"],
            cv: "Download CV",

            // Traducciones de UniversityProyect
            titleUP: "University Projects",
            introUP: "Throughout my university career, I have had the opportunity to work on various projects that have allowed me to apply and deepen my knowledge in software development. Below, I present a selection of the most outstanding ones.",
            
            // Traducciones de ProjectPage
            techTitle: "Technologies Used",
            galleryTitle: "Project Gallery",
            objTitle: "Objective",
            lectionsTitle: "Lessons Learned",
            linkRepo: "Repository Link",
            conclusionTitle: "Conclusion",

            // Traducciones de Skull King
            descriptionSkullKing: "A digital version of the 'Skull King' card game.",
            skullkingIntro: "Skull King is the digital adaptation of the popular card game, implemented as a complete multiplayer game system. The system includes essential functionalities for social interaction and match management, such as a friends system and an integrated in-game chat.",
            skullkingIntro2: "This project was developed by a team of 5 people in the context of the 'Design and Testing I' course, whose main objective was to apply SPA (Single Page Application) architectures with modern frontend and backend technologies.",
            skullkingObj: "The main objective was the development of a complete web application, focusing on correct code organization, the application of design patterns, and the configuration of an architecture that allowed for a clear separation between game logic (backend) and the user interface (frontend).",
            skullkingLections: ["• Application of Best Practices and Architecture. The project served as an essential platform to learn and apply best development and testing practices, as well as the fundamentals of distributed systems architecture.", "• REST API Design. Creation of multiple RESTful endpoints for communication between the frontend and the backend (match management, chat, friends, etc.).", "• Full-Stack Integration. Management of a project with separate dependencies and development environments (Maven for Java and NPM/Node.js for React).", "• Version Control and Collaboration. Teamwork on a GitHub repository (with 712 commits and 7 collaborators)."],
            skullkingConclusion: "The Skull King project was a success in achieving the complete implementation of the digital game system, exceeding the basic functional scope. Beyond the essential card game logic, the team managed to integrate key secondary tasks, such as a friends system and an in-game chat, demonstrating the capacity to develop and implement a robust distributed architecture (Java/Spring Boot and React) in a collaborative work environment.",

            // Traducciones de News Analysis
            descriptionNewsAnalysis: "News search engine using information retrieval systems.",
            newsAnalysisIntro: "News Analysis is a project focused on Information Retrieval (IR) in which various IR systems were built and evaluated to satisfy specific information needs regarding a news corpus. The project aimed to identify and select the most effective method for conducting specific searches in a news database.",
            newsAnalysisIntro2: "This work was developed in the context of the 'Artificial Intelligence' course by a team of 2 people. The searches implemented could be Boolean or free text (prompt) type. My role specialized in the analysis and optimization of the free text search system.",
            newsAnalysisObj: "This work was developed in the context of the 'Artificial Intelligence' course by a team of 2 people. The searches implemented could be Boolean or free text (prompt) type. My role specialized in the analysis and optimization of the free text search system.",
            newAnalysisLections: ["• Text Normalization and Cleaning. Advanced techniques were applied to eliminate StopWords, expand contractions, tokenization, stemming, and lemmatization (using NLTK and Spacy).", "• Compound Entity Detection. Logic was implemented to identify words or phrases whose combined meaning is more valuable than separated ones (e.g., 'Artificial Intelligence' or 'drug trafficking').", "• Free Text Model (tf-idf). A system based on calculating the tf-idf matrix and applying cosine similarity between the query vector and the corpus document vector was developed to determine their relevance.", "• Indexing. The Whoosh library was used for the efficient creation of inverted indexes and the management of search queries.", "• Comparative Analysis. Different system configurations (Boolean vs. free text) and variations within each model (with/without lemmatization, with/without synonyms) were compared.", "• Key Metrics. Performance was evaluated using standard IR metrics such as Mean Average Precision (MAP), Precision (), and Recall ()."],
            newsAnalysisConclusion: "The key conclusions from the evaluation of the Information Retrieval (IR) system focused on the impact of Natural Language Processing (NLP) techniques on performance metrics. In the Boolean model, the inclusion of lemmatization resulted in a slight improvement in precision for specific queries. On the other hand, in the free text model, the addition of synonyms significantly increased Recall (coverage), allowing a greater variety of accepted words, although this led to a slight decrease in precision due to semantic indetermination. Finally, the design decision was oriented towards prioritizing precision over coverage, as the correct and pertinent retrieval of documents was considered more crucial.",
            
            // Traducciones de Acme Ans
            descriptionAcmeAns: "Airport and flight management system",
            acmeAnsIntro: "Acme-ANS is a backend management system designed to administer essential airport operations, including flight scheduling, airport infrastructure management, and the user seat reservation system.",
            acmeAnsIntro2: "This project was developed in the context of the 'Design and Testing II' course by a team of 5 people. Each member was responsible for addressing specific client functionalities, integrating them into a single solution.",
            acmeAnsObj: "The main purpose was to demonstrate the capacity for adaptation and mastery of an unfamiliar framework, strictly complying with the requirements and expectations defined by the client throughout the different iterations.",
            acmeAnsLections: ["• Analysis and Requirements Modeling. I had to identify, prioritize, and translate the client's specific needs into functional and non-functional requirements, which culminated in the development of a solid data model and the definition of the system's main classes.", "• Quality and Security Assurance (Ethical Hacking). Exhaustive security tests were executed using 'hack files' to identify and mitigate security flaws. This included preventing attacks such as SQL Injection and GET/POST hacking vulnerabilities.","• Technical Adaptation to an Unknown Framework. The Acme-ANS framework, being a proprietary system of the University of Seville, had limited external documentation. This situation required rapid adaptation from scarce sources (presentations and internal forums), demonstrating high autonomy in learning.", "• Change Management and Agility. Project requirements were subject to variations. This tested the capacity for change reaction and the ability to continuously reorganize tasks and priorities to ensure delivery."],
            acmeAnsConclusion: "The project culminated with the successful delivery of the assigned functionalities and the validation of the security requirements.",

            // Traducciones de PersonalProyects
            titlePP: "Personal Projects",
            introPP: "In my free time, I've had some ideas for new projects...",

            // Traducciones de Mario Level
            marioLevelName: "Mario Level",
            descriptionMarioLevel: "A small level from the known Mario Bros video game.",
            marioLevelIntro: "Mario Level is a personal project consisting of the development of a small level of the iconic Mario Bros game, created as a demonstration of 2D video game development skills and the application of the Phaser framework.",
            marioLevelIntro2: "This project was carried out by personal initiative due to interest and enjoyment of the game, serving as a practical self-learning platform on the essential tools in browser-based game development.",
            marioLevelObj: "The main objective was the mastery of the Phaser framework to manage game logic (physics, game loop, collisions) and faithfully recreate the classic platform experience.",
            marioLevelLections: ["• Game Development Cycle (Game Loop). Deep understanding of how rendering, state updates, and user input management work in a game environment.", "• Physics Engine. Configuration and manipulation of the Phaser engine's physics to replicate the characteristic feel of retro games (gravity, momentum).", "• Collision Handling. Implementation of precise collision detection systems between the player, enemies, and world objects (tiles).", "• Asset Management. Loading and optimization of spritesheets and tilemaps for efficient performance in the browser."],
            marioLevelConclusion: "The result of this project is a tangible proof of the ability to handle game physics, graphics, and game loop logic to deliver interactive browser-level experiences.",

            // Traducciones de Img Cleaner
            imgCleanerName: "Photo Cleaner",
            descriptionimgCleaner: "An intelligent photo cleaner that automatically detects and classifies images.",
            imgCleanerIntro: "Intelligent Photo Cleaner is a personal Image Classification project that uses Artificial Intelligence to automatically detect and categorize specific types of images that often take up unnecessary space.",
            imgCleanerIntro2: "The system will be designed to classify images into categories such as: whiteboards (or handwritten notes), screenshots (from WhatsApp, Instagram, email, etc.), location/map images, and, by default, personal photos. The final objective is to develop a functional interface that allows the user to selectively review and delete unwanted categories.",
            imgCleanerIntro3: "Convolutional Neural Networks (CNN) are the chosen architecture because this method is optimal for hierarchically learning to extract the unique visual characteristics of each class, from basic patterns (textures of whiteboards) to the complex and specific interface elements (typography, status bar icons) that define a WhatsApp or Instagram screenshot.",
            imCleanerActual: "The project is in its initial design and data collection phase, so the classification model and performance metrics are currently still under development.",
            imgCleanerObj: "The main objective is to design and train a Convolutional Neural Network (CNN) model capable of accurately classifying images into the predefined categories, and to integrate this model into a functional web interface for user interaction.",
            imgCleanerLections: ["Design and training of a robust CNN model for multi-class image classification.", "Effective handling of unbalanced and varied datasets for training.", "Integration of the AI model into a full-stack application (frontend/backend) to process user image uploads."],
            imgCleanerConclusion: "The project will provide strong practical experience in applying deep learning techniques (CNNs) to solve a common user problem (managing phone storage) through a functional software solution.",

            // Traducciones de ContactBar
            contactTitle: "Contact Me",
            rightsReserved: "All Rights Reserved",
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
            titleUP: "Proyectos Universitarios",
            introUP: "A lo largo de mi carrera universitaria, he tenido la oportunidad de trabajar en diversos proyectos que me han permitido aplicar y profundizar mis conocimientos en desarrollo de software. A continuación, presento una selección de los más destacados.",

            // Traducciones de ProjectPage
            techTitle: "Tecnologías Empleadas",
            galleryTitle: "Galería del Proyecto",
            objTitle: "Objetivo",
            lectionsTitle: "Lecciones aprendidas",
            linkRepo: "Link del repositorio",
            conclusionTitle: "Conclusión",

            // Traducciones de Skull King
            descriptionSkullKing: "Una versión digital del juego de cartas 'Skull King'.",
            skullkingIntro: "Skull King es la adaptación digital del popular juego de cartas, implementado como un sistema completo de juego multijugador. El sistema incluye funcionalidades esenciales para la interacción social y la gestión de partidas, como un sistema de amigos y un chat integrado en el juego.",
            skullkingIntro2: "Este proyecto fue desarrollado por un equipo de 5 personas en el contexto de la asignatura Diseño y Pruebas I, cuyo objetivo principal era aplicar arquitecturas de SPA (Single Page Application) con tecnologías frontend y backend modernas.",
            skullkingObj: "El objetivo principal fue el desarrollo de una aplicación web completa, enfocándose en la correcta organización del código, la aplicación de patrones de diseño, y la configuración de una arquitectura que permitiera la separación clara entre la lógica del juego (backend) y la interfaz de usuario (frontend).",
            skullkingLections: ["• Aplicación de Buenas Prácticas y Arquitectura. El proyecto sirvió como plataforma esencial para aprender y aplicar buenas prácticas de desarrollo, testeo y los fundamentos de la arquitectura de sistemas distribuidos.", "• Diseño de APIs REST. Creación de múltiples endpoints RESTful para la comunicación entre el frontend y el backend (gestión de partidas, chat, amigos, etc.).", "•  Integración Full-Stack. Gestión de un proyecto con dependencias y entornos de desarrollo separados (Maven para Java y NPM/Node.js para React).", "• Control de Versiones y Colaboración. Trabajo en equipo en un repositorio de GitHub (con 712 commits y 7 colaboradores)."],
            skullkingConclusion: "El proyecto Skull King fue un éxito al lograr la implementación completa del sistema de juego digital, superando el alcance funcional básico. Más allá de la lógica esencial del juego de cartas, el equipo consiguió integrar tareas secundarias clave, como un sistema de amigos y un chat dentro del juego, demostrando la capacidad para desarrollar y poner en práctica una arquitectura distribuida robusta (Java/Spring Boot y React) en un entorno de trabajo colaborativo.s",

            // Traducciones de News Analysis
            descriptionNewsAnalysis: "Buscador de noticias mediante el uso de sistemas de recuperación.",
            newsAnalysisIntro: "News Analysis es un proyecto enfocado en la Recuperación de Información (IR) en el que se construyó y evaluó diversos sistemas de IR para satisfacer necesidades de información específicas sobre un corpus de noticias. El proyecto buscaba identificar y seleccionar el método más efectivo para realizar búsquedas específicas en una base de datos de noticias.",
            newsAnalysisIntro2: "Este trabajo fue desarrollado en el contexto de la asignatura Inteligencia Artificial por un equipo de 2 personas. Las búsquedas implementadas podían ser de tipo booleano o de texto libre (prompt). Mi rol se especializó en el análisis y optimización del sistema de búsqueda por texto libre.",
            newsAnalysisObj: "Este trabajo fue desarrollado en el contexto de la asignatura Inteligencia Artificial por un equipo de 2 personas. Las búsquedas implementadas podían ser de tipo booleano o de texto libre (prompt). Mi rol se especializó en el análisis y optimización del sistema de búsqueda por texto libre.",
            newAnalysisLections: ["• Normalización y Limpieza de Texto. Se aplicaron técnicas avanzadas para eliminar StopWords, expandir contracciones, tokenización, stemming y lematización (usando NLTK y Spacy).", "• Detección de Entidades Compuestas. Se implementó lógica para identificar palabras o frases cuyo significado conjunto es más valioso que separadas (ej. 'Artificial Intelligence' o 'tráfico de drogas').","•  Modelo de Texto Libre (tf-idf). Se desarrolló un sistema basado en el cálculo de la matriz tf-idf y la aplicación del coseno de similitud entre el vector de la consulta y el vector de los documentos del corpus para determinar su relevancia.", "• Indexación. Se utilizó la biblioteca Whoosh para la creación eficiente de índices invertidos y la gestión de consultas de búsqueda.", "•  Análisis Comparativo. Se compararon distintas configuraciones de sistemas (booleano vs. texto libre) y variaciones dentro de cada modelo (con/sin lematización, con/sin sinónimos).", "•  Métricas Clave. Se evaluó el rendimiento utilizando métricas estándar de IR como Mean Average Precision (MAP), Precisión () y Recall ()."],
            newsAnalysisConclusion: "Las conclusiones clave de la evaluación del sistema de Recuperación de Información (IR) se centraron en el impacto de las técnicas de procesamiento de lenguaje natural (PLN) en las métricas de rendimiento. En el modelo booleano, la inclusión de la lematización resultó en una ligera mejora de la precisión para las consultas específicas. Por otro lado, en el modelo de texto libre, la adición de sinónimos incrementó significativamente el Recall (cobertura), permitiendo una mayor variedad de palabras aceptadas, aunque esto conllevó una ligera disminución de la precisión debido a la indeterminación semántica. Finalmente, la decisión de diseño se orientó a priorizar la precisión sobre la cobertura, ya que se consideró más crucial la recuperación correcta y pertinente de los documentos.",

            // Traducciones de Acme Ans
            acmeAnsIntro: "Acme-ANS es un sistema de gestión backend diseñado para administrar operaciones aeroportuarias esenciales, incluyendo la programación de vuelos, la gestión de infraestructuras aeroportuarias y el sistema de reserva de asientos para usuarios.",
            acmeAnsIntro2: "Este proyecto fue desarrollado en el contexto de la asignatura Diseño y Pruebas II por un equipo de 5 personas. Cada miembro fue responsable de atender funcionalidades específicas del cliente, integrándolas en una única solución",
            acmeAnsObj: "La finalidad principal fue demostrar la capacidad de adaptación y el dominio de un framework desconocido, cumpliendo rigurosamente con los requisitos y las expectativas definidas por el cliente a lo largo de las distintas iteraciones.",
            acmeAnsLections: ["• Análisis y Modelado de Requisitos. Se tuvo identificar, priorizar y traducir las necesidades específicas del cliente en requisitos funcionales y no funcionales, lo cual me culminó al desarrollo de un modelo de datos sólido y la definición de las clases principales del sistema.", "• Garantía de Calidad y Seguridad (Hacking Ético). Se ejecutaron pruebas exhaustivas de seguridad utilizando archivos hack para identificar y mitigar fisuras de seguridad. Esto incluyó la prevención de ataques como SQL Injection y vulnerabilidades de manipulación de peticiones GET/POST.","• Adaptación Técnica a un Framework Desconocido. El framework Acme-ANS, siendo un sistema propietario de la Universidad de Sevilla, presentaba una documentación externa limitada. Esta situación requirió una rápida adaptación a partir de fuentes escasas (presentaciones y foros internos), demostrando una alta autonomía en el aprendizaje.", "• Gestión del Cambio y Agilidad. Los requisitos del proyecto estaban sujetos a variaciones. Esto puso a prueba la capacidad de reacción al cambio y la habilidad para reorganizar tareas y prioridades de forma continua para asegurar la entrega."],
            acmeAnsConclusion: "El proyecto culminó con la entrega exitosa de las funcionalidades asignadas y la validación de los requisitos de seguridad.",

            // Traducciones de PersonalProyects
            titlePP: "Proyectos Personales",
            introPP: "En mi tiempo libre, he tenido algunas ideas para nuevos proyectos...",

            // Traducciones de Mario Level
            marioLevelName: "Nivel de Mario",
            descriptionmarioLevel: "Un pequeño nivel del videojuego conocido Mario Bros",
            marioLevelIntro: "Mario Level es un proyecto personal que consiste en el desarrollo de un pequeño nivel del icónico juego Mario Bros, creado como una demostración de habilidades de desarrollo de videojuegos 2D y la aplicación del framework Phaser.",
            marioLevelIntro2: "Este proyecto se llevó a cabo por iniciativa personal debido al interés y gusto por el juego, sirviendo como una plataforma de autoaprendizaje práctico sobre las herramientas esenciales en el desarrollo de juegos basados en navegador.",
            marioLevelObj: "El objetivo principal fue el dominio del framework Phaser para gestionar la lógica del juego (físicas, game loop, colisiones) y recrear con fidelidad la experiencia clásica de plataformas.",
            marioLevelLections: ["•  Ciclo de Desarrollo de Juegos (Game Loop). Comprensión profunda de cómo funcionan la renderización, la actualización de estado y la gestión de entradas (input) del usuario en un entorno de juego.", "•  Motor de Físicas. Configuración y manipulación de las físicas del motor de Phaser para replicar el feeling característico de los juegos retro (gravedad, momentum).", "•  Manejo de Colisiones. Implementación de sistemas de detección de colisiones precisas entre el jugador, los enemigos y los objetos del mundo (tiles).", "• Gestión de Recursos (Assets). Carga y optimización de spritesheets y mapas de mosaicos (tilemaps) para un rendimiento eficiente en el navegador."],
            marioLevelConclusion: "El resultado de este proyecto es una prueba tangible de la capacidad de manejar físicas de juego, gráficos, y lógica de game loop para entregar experiencias interactivas a nivel de navegador.",

            // Traducciones de Img Cleaner
            imgCleanerName: "Limpiador de fotos",
            descriptionimgCleaner: "Un limpiador inteligente de fotos que detecta y clasifica automáticamente imágenes",
            imgCleanerIntro: "Limpiador Inteligente de Fotos es un proyecto personal de Clasificación de Imágenes que utiliza la Inteligencia Artificial para detectar y categorizar automáticamente tipos específicos de imágenes que suelen ocupar espacio innecesario.",
            imgCleanerIntro2: "El sistema se diseñará para clasificar las imágenes en categorías como: pizarras (o notas manuscritas), capturas de pantalla (de WhatsApp, Instagram, correo electrónico, etc.), imágenes de ubicaciones/mapas y, por defecto, fotos personales. El objetivo final es desarrollar una interfaz funcional que permita al usuario revisar y eliminar de forma selectiva las categorías no deseadas.",
            imgCleanerIntro3: "Las Redes Neuronales Convolucionales (CNN) son la arquitectura elegida debido a que este método es óptimo porque permite aprender jerárquicamente a extraer las características visuales únicas de cada clase, desde patrones básicos (texturas de pizarras) hasta los complejos y específicos elementos de interfaz (tipografía, iconos de barra de estado) que definen una captura de pantalla de WhatsApp o Instagram.",
            imCleanerActual: "El proyecto se encuentra en su fase inicial de diseño y recolección de datos, por lo que actualmente el modelo de clasificación y las métricas de rendimiento aún están en desarrollo.",
            imgCleanerObj: "",
            imgCleanerLections: [],
            imgCleanerConclusion: "",

            // Traducciones de ContactBar
            contactTitle: "Contáctame",
            rightsReserved: "Todos los derechos reservados",
        }
    }
},
  lng: "es", // idioma inicial
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
