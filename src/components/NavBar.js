import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./i18n";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useLocation } from 'react-router-dom';
// importar elementos de pagina cuando se tengan

import "../css/Banner.css";
import "../css/NavBar.css";

export const NavBar = () => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => i18n.changeLanguage(lang);
    const location = useLocation(); 
    
    const projects = [
        { link: '/university-proyects', label: t("pUni") },
        { link: '/personal-proyects', label: t("pPersonal") }
    ];

    // Función que recibe el estado de activo de React Router
    const getNavLinkClass = ({ isActive }) => {
        return `btn navbar-btn ${isActive ? 'active' : ''}`;
    };

    // Función para el Dropdown: Comprueba si alguna sub-ruta está activa
    const isProjectRouteActive = projects.some(p => location.pathname.startsWith(p.link));


    return (
        <Navbar expand="lg" className="nav-bar">
        <Container>
            <Navbar.Brand as={Link} to="/" style={{color: '#fff'}}>Candela Gutiérrez</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link
                    as={NavLink} 
                    to="/"
                    className={getNavLinkClass}
                    end // Evita que se active en TODAS las rutas que empiezan por /
                >
                    {t("home")}
                </Nav.Link>
                <Nav.Link
                    as={NavLink} 
                    to="/contact"
                    className={getNavLinkClass}
                >
                    {t("contact")}
                </Nav.Link>
                <NavDropdown 
                    title={t("proyects")} 
                    id="basic-nav-dropdown" 
                    // Aplica la clase 'active' al contenedor si alguna ruta de proyecto está activa
                    className={`btn navbar-btn ${isProjectRouteActive ? 'active' : ''}`}
                >
                    {projects.map((project, index) => (
                        <NavDropdown.Item
                            key={index}
                            as={Link} 
                            to={project.link}
                            // Opcional: Para resaltar el Dropdown.Item en sí, usa una clase condicional
                            className={location.pathname === project.link ? 'dropdown-item-active' : ''}
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