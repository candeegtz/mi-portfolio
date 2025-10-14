import '../css/ProjectPage.css'; // Estilos para la página del proyecto
import { useTranslation } from "react-i18next";
import "../components/i18n";

// Importa aquí las imágenes de tu proyecto cuando las tengas
// import skullKingImage1 from '../img/skull-king/imagen1.png';
// import skullKingImage2 from '../img/skull-king/imagen2.png';

export const SkullKingPage = () => {

    const { t, i18n } = useTranslation();
    // Lista de tecnologías que utilizaste
    const technologies = [
        "Java",
        "ANTLR",
        "Java Swing",
        "Gradle"
    ];

    // Array para las imágenes de la galería
    const images = [
        // { src: skullKingImage1, alt: "Vista del tablero de juego" },
        // { src: skullKingImage2, alt: "Ejemplo de una jugada" }
    ];

    

    return (
        <div className="project-page">
            <header className="project-page-header">
                <h1>{t('descriptionSkullKing')}</h1>
                <p>{t('skullKingIntro')}</p>
            </header>

            <section className="project-section">
                <h2>{t('techTitle')}</h2>
                <ul className="tech-list">
                    {technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </section>
 
            <section className="project-section">
                <h2>Galería del Proyecto</h2>
                <div className="image-gallery">
                    <p>Próximamente se añadirán imágenes del proyecto.</p>
                </div>
            </section>
        </div>
    )
}

export default SkullKingPage;