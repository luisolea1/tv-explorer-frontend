import SeriesCard from '../SeriesCard/SeriesCard.jsx';
import './SearchResults.css';

function SearchResults({ onSelectShow, query, shows }) {
  const resultLabel = shows.length === 1
    ? '1 resultado'
    : `${shows.length} resultados`;

  return (
    <section
      className="search-results"
      aria-labelledby="search-results-title"
    >
      <div className="search-results__header">
        <div>
          <p className="search-results__eyebrow">Resultados</p>

          <h2 className="search-results__title" id="search-results-title">
            Series relacionadas con “{query}”
          </h2>
        </div>

        <p className="search-results__count">{resultLabel}</p>
      </div>

      <ul className="search-results__grid">
        {shows.map((show) => (
          <li className="search-results__item" key={show.id}>
            <SeriesCard
              onSelect={onSelectShow}
              show={show}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SearchResults;