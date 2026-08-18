import { useState } from 'react';

import Preloader from '../Preloader/Preloader.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import './SeriesPage.css';

function SeriesPage() {
  const [submittedQuery, setSubmittedQuery] = useState('');

  const isLoading = false;

  return (
    <main className="series-page">
      <section
        className="series-page__header"
        aria-labelledby="series-page-title"
      >
        <p className="series-page__eyebrow">Explora el catálogo</p>

        <h1 className="series-page__title" id="series-page-title">
          Encuentra tu próxima serie
        </h1>

        <p className="series-page__description">
          Busca una serie por su nombre y consulta información obtenida
          directamente desde TVmaze.
        </p>
      </section>

      <section
        className="series-page__content"
        aria-label="Buscador y resultados de series"
      >
        <SearchForm
          isLoading={isLoading}
          onSearch={setSubmittedQuery}
        />

        {isLoading ? (
          <Preloader />
        ) : (
          <p className="series-page__placeholder">
            {submittedQuery
              ? `Búsqueda preparada para: “${submittedQuery}”.`
              : 'Escribe el nombre de una serie para comenzar.'}
          </p>
        )}
      </section>
    </main>
  );
}

export default SeriesPage;