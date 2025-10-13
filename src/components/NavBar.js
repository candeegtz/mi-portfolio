import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./i18n";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react'; 
import NavDropdown from 'react-bootstrap/NavDropdown';


import "../css/Banner.css";
import "../css/NavBar.css";

export const NavBar = () => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => i18n.changeLanguage(lang);
    const [activeSection, setActiveSection] = useState('home'); // Estado para la sección activa
    const projects = [
        { id: 'pUni', link: '#university-proyects',label: t("pUni") },
        { id: 'pPersonal', link: '#personal-proyects', label: t("pPersonal") }
    ];


    // Función para manejar el cambio de sección activa
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    useEffect(() => {
        const element = document.getElementById(activeSection);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [activeSection]);

    return (
        <Navbar expand="lg" className="nav-bar">
        <Container>
            <Navbar.Brand href="#home"  style={{color: '#fff'}}>Candela Gutiérrez</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link
                    href="#home"
                    className={`btn navbar-btn ${activeSection === 'home' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('home')}
                >
                    {t("home")}
                </Nav.Link>
                <Nav.Link
                    href="#contact"
                    className={`btn navbar-btn ${activeSection === 'contact' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('contact')}
                >
                    {t("contact")}
                </Nav.Link>
                 <NavDropdown title={t("proyects")} id="basic-nav-dropdown" className={`btn navbar-btn ${projects.some(p => p.id === activeSection) ? 'active' : ''}`}>
                    {projects.map(project => (
                        <NavDropdown.Item
                            key={project.id}
                            href={`#${project.link}`}
                            onClick={() => handleSectionChange(project.id)}
                        >
                            {project.label}
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>

            </Nav>
                <div className="ms-auto">
                    <button 
                        className= "btn banner-btn" onClick={() => changeLanguage("es")}>
                        ES
                    </button>
                    <button 
                        className= "btn banner-btn"
                        onClick={() => changeLanguage("en")}
                    >
                        EN
                    </button>
                </div>
            </Navbar.Collapse>
        </Container>
            </Navbar>
    );
}


export default NavBar;