import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon.jsx'; 
import './NotFoundPage.css';

function NotFoundPage() {
return (
    <main className="not-found-page">
      <section
        className="not-found-page__content"
        aria-labelledby="not-found-title"
      >
        <p className="not-found-page__code" aria-hidden="true">
          404
        </p>

        <h1 className="not-found-page__title" id="not-found-title">
          Esta página se perdió entre temporadas
        </h1>

        <p className="not-found-page__description">
          La dirección que intentaste visitar no existe o fue trasladada.
        </p>

        <Link className="not-found-page__link" to="/">
          Volver al inicio
          <Icon
            className="not-found-page__link-icon"
            name="arrow-right"
          />
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;