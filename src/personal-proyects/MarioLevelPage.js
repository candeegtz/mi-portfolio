import '../css/ProjectPage.css'; // Estilos para la página del proyecto
import { useTranslation } from "react-i18next";
import "../components/i18n";

export const ImgCleanerPage = () => {

    const { t, i18n } = useTranslation();
    // Lista de tecnologías que utilizaste
    const technologies = [
        "JavaScript",
        "HTML",
        "CSS",
        "Phaser"
    ];

    // Array para las imágenes de la galería
    const images = [
        // { src: skullKingImage1, alt: "Vista del tablero de juego" },
        // { src: skullKingImage2, alt: "Ejemplo de una jugada" }
    ];

    return (
        <div className="project-page">
            <header className="project-page-header">
                <h1>Mario Level, Ángel Bros</h1>
                <p>{t('marioLevelIntro')} </p>
                <p>{t('marioLevelIntro2')} </p>
                <p>{t('marioLevelIntro3')} </p>         
            </header>

            <section className="project-section">
                <h2>{t('objTitle')}</h2>
                <div>
                    <p>{t('marioLevelObj')}</p>
                </div>
            </section>

            <section className="project-section">
                <h2>{t('lectionsTitle')}</h2>
                <div>
                    {t("marioLevelLections", { returnObjects: true }).map((lection, index) => (
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
                    <a href="https://github.com/candeegtz/MARIO-LEVEL-Angel-Bros" target="_blank" rel="noopener noreferrer" className="repo-link-button">
                        Mario Level, Ángel Bros
                    </a>
                </div>
            </section>

            <section className="project-section">
                <h2>{t('conclusionTitle')}</h2>
                <div>
                    <p>{t('marioLevelConclusion')}</p>
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

export default ImgCleanerPage;