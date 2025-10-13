import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../img/headerImg.png';
import "./i18n";
import { useTranslation } from "react-i18next";
import "../css/Banner.css";

export const Banner = () => {

    const { t, i18n } = useTranslation();

    const [loopNum, setLoopNum] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false); // Para saber si la palabra se está escribiendo o no
    const toRotate = t("rotatingTexts", {returnObjects: true}); // array de textos a rotar
    const [text, setText] = useState(''); // texto que se va a mostrar: ej -> We...
    const period = 2000; // tiempo de espera entre cada palabra 
    const [delta, setDelta] = useState(300 - Math.random() * 200); // velocidad de escritura

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    },  [text])

    const tick = () => {
        let i = loopNum%toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fulltext) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner">
            <Container>
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> {t("welcome")} </span>
                        <h1> {t("iam")}<span className="wrap"> {text} </span></h1>
                        <p> {t("intro")}</p>
                         <a
                            href="/Candela-Gutiérrez-cv.pdf"
                            download
                            className="btn banner-btn"
                            style={{ 
                                display: "inline-flex", 
                                alignItems: "center", 
                                gap: "8px"}}
                            >
                            {t("cv")} <ArrowRightCircle size={25} />
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" className="img-fluid" /> {/* <-- img-fluid para responsividad */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}