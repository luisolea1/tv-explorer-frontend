import { useState } from 'react';
import { SEARCH_INPUT_MAX_LENGTH } from '../../utils/config.js';

import './SearchForm.css';

function SearchForm({ isLoading, onSearch }) {
  const [query, setQuery] = useState('');

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const normalizedQuery = query.trim();

    if (!normalizedQuery || isLoading) {
      return;
    }

    onSearch(normalizedQuery);
  }

  const isButtonDisabled = !query.trim() || isLoading;

  return (
    <form
      className="search-form"
      aria-busy={isLoading}
      onSubmit={handleSubmit}
    >
      <label className="search-form__label" htmlFor="series-search">
        Nombre de la serie
      </label>

      <div className="search-form__controls">
        <input
        className="search-form__input"
        id="series-search"
        maxLength={SEARCH_INPUT_MAX_LENGTH}
        name="query"
        onChange={handleQueryChange}
        placeholder="Ejemplo: Stranger Things"
        required
        type="search"
        value={query}
/>

        <button
          className="search-form__button"
          disabled={isButtonDisabled}
          type="submit"
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
    </form>
  );
}

export default SearchForm;