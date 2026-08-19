import { useState } from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import NothingFound from '../NothingFound/NothingFound.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import SeriesModal from '../SeriesModal/SeriesModal.jsx';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton.jsx';
import { searchShows } from '../../utils/tvMazeApi.js';
import './SeriesPage.css';

const RESULTS_PER_PAGE = 3;

function SeriesPage() {
const [errorMessage, setErrorMessage] = useState('');
const [hasSearched, setHasSearched] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [selectedShow, setSelectedShow] = useState(null);
const [shows, setShows] = useState([]);
const [submittedQuery, setSubmittedQuery] = useState('');
const [visibleCount, setVisibleCount] = useState(RESULTS_PER_PAGE);

async function handleSearch(query) {
    setSubmittedQuery(query);
    setHasSearched(true);
    setIsLoading(true);
    setErrorMessage('');
    setSelectedShow(null);
    setShows([]);
    setVisibleCount(RESULTS_PER_PAGE);

    try {
    const searchResults = await searchShows(query);
    setShows(searchResults);
    } catch {
    setErrorMessage(
        'No fue posible obtener las series. Verifica tu conexión e inténtalo nuevamente.',
    );
    } finally {
    setIsLoading(false);
    }
}

function handleRetry() {
    if (submittedQuery) {
    handleSearch(submittedQuery);
    }
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
const showResults = !isLoading && !errorMessage && shows.length > 0;

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
            onRetry={handleRetry}
        />
        )}

        {showNothingFound && <NothingFound query={submittedQuery} />}

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