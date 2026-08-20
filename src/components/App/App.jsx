import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import SeriesPage from '../SeriesPage/SeriesPage.jsx';
import { searchShows } from '../../utils/tvMazeApi.js';
import './App.css';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [submittedQuery, setSubmittedQuery] = useState('');

  function handleSearch(query) {
    setSubmittedQuery(query);
    setHasSearched(true);
    setIsLoading(true);
    setErrorMessage('');
    setShows([]);

    return searchShows(query)
      .then((searchResults) => {
        setShows(searchResults);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage(
          'No fue posible obtener las series. Verifica tu conexión e inténtalo nuevamente.',
        );
        setIsLoading(false);
      });
  }

  function handleRetry() {
    if (submittedQuery) {
      handleSearch(submittedQuery);
    }
  }

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          path="/series"
          element={(
            <SeriesPage
              errorMessage={errorMessage}
              hasSearched={hasSearched}
              isLoading={isLoading}
              onRetry={handleRetry}
              onSearch={handleSearch}
              shows={shows}
              submittedQuery={submittedQuery}
            />
          )}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;