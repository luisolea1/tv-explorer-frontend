import Icon from '../Icon/Icon.jsx';
import './About.css';


function About() {
return (

<section className="about" aria-labelledby="about-title">
    <div className="about__container">
        <div className="about__heading">
        <p className="about__eyebrow">Sobre el proyecto</p>

        <h2 className="about__title" id="about-title">
            Una forma sencilla de descubrir nuevas historias
        </h2>
        </div>

        <div className="about__content">
        <p className="about__description">
            TV Explorer es una aplicación desarrollada con React que permite
            buscar series y consultar información actualizada mediante la API
            pública de TVmaze.
        </p>

        <p className="about__description">
            El proyecto utiliza componentes reutilizables, rutas, solicitudes
            asíncronas, estados de carga y una interfaz responsiva construida
            con CSS y la metodología BEM.
        </p>

        <div className="about__author">
            <span className="about__author-mark" aria-hidden="true">
            LO
            </span>

            <div>
            <p className="about__author-label">Desarrollado por</p>
            <p className="about__author-name">Luis Olea</p>
            </div>
        </div>

        <a
            className="about__link"
            href="https://github.com/luisolea1"
            rel="noreferrer"
            target="_blank"
        >
            Visitar perfil de GitHub
            
            <Icon
            className="about__link-icon"
            name="external-link"
            />
        </a>
        </div>
    </div>
    </section>
);
}

export default About;