import { Link } from 'react-router-dom';

import About from '../About/About.jsx';
import './Main.css';

function Main() {
return (
    <main className="main">
    <section className="main__hero" aria-labelledby="main-title">
        <div className="main__content">
        <p className="main__eyebrow">Tu próxima historia comienza aquí</p>

        <h1 className="main__title" id="main-title">
            Descubre series que merecen tu
            <span className="main__title-accent"> próximo maratón.</span>
        </h1>

        <p className="main__description">
            Busca series de televisión, consulta sus calificaciones, géneros,
            estado y sinopsis, y encuentra algo nuevo para ver con información
            obtenida desde TVmaze.
        </p>

        <Link className="main__button" to="/series">
            Explorar series
            <span className="main__button-icon" aria-hidden="true">
            →
            </span>
        </Link>
        </div>

        <div className="main__glow main__glow_type_blue" aria-hidden="true" />
        <div className="main__glow main__glow_type_pink" aria-hidden="true" />
    </section>

    <About />
    </main>
);
}

export default Main;