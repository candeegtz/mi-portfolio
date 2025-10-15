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
        "Spring Boot",
        "React",
        "JavaScript",
        "HTML",
        "CSS"
    ];

    // Array para las imágenes de la galería
    const images = [
        // { src: skullKingImage1, alt: "Vista del tablero de juego" },
        // { src: skullKingImage2, alt: "Ejemplo de una jugada" }
    ];

    

    return (
        <div className="project-page">
            <header className="project-page-header">
                <h1>Skull King</h1>
                <p>{t('skullkingIntro')} </p>
                <p>{t('skullkingIntro2')} </p>
                
            </header>

            <section className="project-section">
                <h2>{t('objTitle')}</h2>
                <div>
                    <p>{t('skullkingObj')}</p>
                </div>
            </section>

            <section className="project-section">
                <h2>{t('lectionsTitle')}</h2>
                <div>
                    {t("skullkingLections", { returnObjects: true }).map((lection, index) => (
                    <p key={index}>{lection}</p>
                ))}
                </div>
            </section>

            <section className="project-section">
                <h2>{t('techTitle')}</h2>
                <ul className="tech-list">
                    {technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </section>

            <section className="project-section">
                <h2>{t('linkRepo')}</h2>
                <div className="repo-link-container">
                    <a href="https://github.com/candeegtz/Skull-King" target="_blank" rel="noopener noreferrer" className="repo-link-button">
                        Skull King
                    </a>
                </div>
            </section>

            <section className="project-section">
                <h2>{t('conclusionTitle')}</h2>
                <div>
                    <p>{t('skullkingConclusion')}</p>
                </div>
            </section>
 
            <section className="project-section">
                <h2>{t('galleryTitle')}</h2>
                <div className="image-gallery">
                    <p>Próximamente se añadirán imágenes del proyecto.</p>
                </div>
            </section>
        </div>
    )
}

export default SkullKingPage;