import { useState } from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import NothingFound from '../NothingFound/NothingFound.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import { searchShows } from '../../utils/tvMazeApi.js';
import './SeriesPage.css';

function SeriesPage() {
const [errorMessage, setErrorMessage] = useState('');
const [hasSearched, setHasSearched] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [shows, setShows] = useState([]);
const [submittedQuery, setSubmittedQuery] = useState('');

async function handleSearch(query) {
    setSubmittedQuery(query);
    setHasSearched(true);
    setIsLoading(true);
    setErrorMessage('');
    setShows([]);

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
    if (show.url) {
    window.open(show.url, '_blank', 'noopener,noreferrer');
    }
}

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
        <SearchResults
            onSelectShow={handleSelectShow}
            query={submittedQuery}
            shows={shows}
        />
        )}
    </section>
    </main>
);
}

export default SeriesPage;