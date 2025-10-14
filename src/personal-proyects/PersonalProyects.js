import { Link } from 'react-router-dom';
import '../css/Proyects.css'; // Crearemos este archivo para los estilos

const PersonalProyects = () => {
    // Array para almacenar tus proyectos. Así es más fácil añadir nuevos en el futuro.
    const projects = [
        {
            id: 1,
            title: "Nivel Mario",
            description: "Una versión digital del juego de cartas 'Skull King'",
            link: "/personal-proyects/mario-level",
        },{
            id: 2,
            title: "Photo's cleaner",
            description: "Una versión digital del juego de cartas 'Skull King'",
            link: "/personal-proyects/photos-cleaner",
        }
    ];

    return (
        <div className="uni-projects-page">
            <header className="projects-header">
                <h1>Proyectos Universitarios</h1>
                <p>
                    En mi tiempo libre he podido dedicarme a algún proyecto personal de ideas que he tenido
                </p>
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