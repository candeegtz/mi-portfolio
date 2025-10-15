import { Link } from 'react-router-dom';
import '../css/Proyects.css'; // Crearemos este archivo para los estilos
import { useTranslation } from "react-i18next";
import "../components/i18n";

const PersonalProyects = () => {

    const { t, i18n } = useTranslation();

    const projects = [
        {
            id: 1,
            title: t('marioLevelName'),
            description: t('descriptionMarioLevel'),
            link: "/personal-proyects/mario-level",
        },{
            id: 2,
            title:  t('imgCleanerName'),
            description: t('descriptionimgCleaner'),
            link: "/personal-proyects/photos-cleaner",
        }
    ];

    return (
        <div className="uni-projects-page">
            <header className="projects-header">
                <h1>{t('titlePP')}</h1>
                <p>{t('introPP')}</p>
            </header>

            <div className="projects-grid">
                {projects.map(project => (
                    <Link to={project.link} key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PersonalProyects;