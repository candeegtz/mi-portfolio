import { Container, Row, Col } from "react-bootstrap";
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';
import { useTranslation } from "react-i18next";
import '../css/ContactBar.css';

export const ContactBar = () => {
    const { t } = useTranslation();

    const linkedinUrl = "https://www.linkedin.com/in/tu-usuario-linkedin";
    const githubUrl = "https://github.com/tu-usuario-github";
    const email = "tu-correo@ejemplo.com";

    return (
        <footer className="contact-bar" id="connect">
            <Container>
                <Row className="align-items-center text-center">
                    <Col md={4} className="text-md-start">
                        <p>&copy; {new Date().getFullYear()} Candela Gutiérrez. {t("rightsReserved")}</p>
                    </Col>
                    <Col md={4}>
                        <h4>{t("contactTitle")}</h4>
                        <div className="social-icon">
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
                            <a href={`mailto:${email}`} aria-label="Email"><Envelope /></a>
                        </div>
                    </Col>
                    <Col md={4} />
                </Row>
            </Container>
        </footer>
    );
}

export default ContactBar;
