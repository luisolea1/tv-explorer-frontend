import { useState } from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import NothingFound from '../NothingFound/NothingFound.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import SeriesModal from '../SeriesModal/SeriesModal.jsx';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton.jsx';
import { RESULTS_PER_PAGE } from '../../utils/config.js';
import './SeriesPage.css';

function SeriesPage({
  errorMessage,
  hasSearched,
  isLoading,
  onRetry,
  onSearch,
  shows,
  submittedQuery,
}) {
  const [selectedShow, setSelectedShow] = useState(null);
  const [visibleCount, setVisibleCount] = useState(RESULTS_PER_PAGE);

  function handleSearch(query) {
    setSelectedShow(null);
    setVisibleCount(RESULTS_PER_PAGE);
    onSearch(query);
  }

  function handleSelectShow(show) {
    setSelectedShow(show);
  }

  function handleCloseModal() {
    setSelectedShow(null);
  }

  function handleShowMore() {
    setVisibleCount((currentCount) => (
      currentCount + RESULTS_PER_PAGE
    ));
  }

  const visibleShows = shows.slice(0, visibleCount);
  const remainingCount = Math.max(shows.length - visibleCount, 0);

  const showInitialMessage = !hasSearched && !isLoading;

  const showNothingFound = (
    hasSearched
    && !isLoading
    && !errorMessage
    && shows.length === 0
  );

  const showResults = (
    !isLoading
    && !errorMessage
    && shows.length > 0
  );

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
          onSearch={handleSearch}
        />

        {showInitialMessage && (
          <p className="series-page__placeholder">
            Escribe el nombre de una serie para comenzar.
          </p>
        )}

        {isLoading && <Preloader />}

        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            onRetry={onRetry}
          />
        )}

        {showNothingFound && (
          <NothingFound query={submittedQuery} />
        )}

        {showResults && (
          <>
            <SearchResults
              onSelectShow={handleSelectShow}
              query={submittedQuery}
              shows={visibleShows}
              totalResults={shows.length}
            />

            <ShowMoreButton
              onClick={handleShowMore}
              remainingCount={remainingCount}
            />
          </>
        )}
      </section>

      {selectedShow && (
        <SeriesModal
          onClose={handleCloseModal}
          show={selectedShow}
        />
      )}
    </main>
  );
}

export default SeriesPage;