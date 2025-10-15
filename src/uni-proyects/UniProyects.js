import { Link } from 'react-router-dom';
import '../css/Proyects.css'; // Crearemos este archivo para los estilos
import { useTranslation } from "react-i18next";
import "../components/i18n";

const UniProyects = () => {

    const { t, i18n } = useTranslation();
    // Array para almacenar tus proyectos. Así es más fácil añadir nuevos en el futuro.
    const projects = [
        {
            id: 1,
            title: "Skull King",
            description: t('descriptionSkullKing'),
            link: "/university-proyects/skull-king",
        },
        {
            id:2,
            title: "News analysis",
            description: t('descriptionNewsAnalysis'),
            link:"/university-proyects/news-analysis"
        },
        {
            id:3,
            title: "Acme Ans",
            description: t('descriptionAcmeAns'),
            link:"/university-proyects/acme-ans"
        }
    ];

    return (
        <div className="uni-projects-page">
            <header className="projects-header">
                <h1>{t('titleUP')}</h1>
                <p>{t('introUP')}</p>
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

export default UniProyects;