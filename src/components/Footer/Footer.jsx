import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
const currentYear = new Date().getFullYear();

return (
    <footer className="footer">
    <div className="footer__container">
        <div className="footer__brand">
        <Link
            className="footer__logo"
            aria-label="Ir a la página principal"
            to="/"
        >
            TV Explorer
        </Link>

        <p className="footer__description">
            Descubre series e información proporcionada por TVmaze.
        </p>
        </div>

        <nav className="footer__navigation" aria-label="Navegación secundaria">
        <Link className="footer__link" to="/">
            Inicio
        </Link>

        <Link className="footer__link" to="/series">
            Explorar series
        </Link>

        <a
            className="footer__link"
            href="https://www.tvmaze.com/"
            rel="noreferrer"
            target="_blank"
        >
            TVmaze
        </a>

        <a
            className="footer__link"
            href="https://github.com/luisolea1/tv-explorer-frontend"
            rel="noreferrer"
            target="_blank"
        >
            GitHub
        </a>
        </nav>

        <div className="footer__legal">
        <p className="footer__copyright">
            © {currentYear} Luis Olea
        </p>

        <p className="footer__attribution">
            Datos de series proporcionados por{' '}
            <a
            className="footer__attribution-link"
            href="https://www.tvmaze.com/api"
            rel="noreferrer"
            target="_blank"
            >
            TVmaze API
            </a>
            .
        </p>
        </div>
    </div>
    </footer>
);
}

export default Footer;