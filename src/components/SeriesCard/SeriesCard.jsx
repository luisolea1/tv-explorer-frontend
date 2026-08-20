import Icon from '../Icon/Icon.jsx';
import './SeriesCard.css';

function SeriesCard({ onSelect, show }) {
  const title = show.name || 'Serie sin título';
  const imageUrl = show.image?.medium || show.image?.original;
  const rating = show.rating?.average ?? 'N/D';
  const premiereYear = show.premiered?.slice(0, 4) || 'Año desconocido';
  const language = show.language || 'Idioma desconocido';

  const genres = (
    show.genres?.slice(0, 2).join(' · ')
    || 'Género no disponible'
  );

  function handleSelect() {
    onSelect?.(show);
  }

  return (
    <article className="series-card">
      <div className="series-card__media">
        {imageUrl ? (
          <img
            className="series-card__image"
            alt={`Póster de ${title}`}
            loading="lazy"
            src={imageUrl}
          />
        ) : (
          <div
            className="series-card__image-placeholder"
            aria-hidden="true"
          >
            <span className="series-card__placeholder-mark">
              TV
            </span>
          </div>
        )}

        <span
          className="series-card__rating"
          aria-label={`Calificación: ${rating}`}
        >
          <Icon
            className="series-card__rating-icon"
            name="star"
          />

          {rating}
        </span>
      </div>

      <div className="series-card__content">
        <p className="series-card__metadata">
          {premiereYear} · {language}
        </p>

        <h3 className="series-card__title">{title}</h3>

        <p className="series-card__genres">{genres}</p>

        <button
          className="series-card__button"
          onClick={handleSelect}
          type="button"
        >
          Ver detalles

          <Icon
            className="series-card__button-icon"
            name="arrow-right"
          />
        </button>
      </div>
    </article>
  );
}

export default SeriesCard;