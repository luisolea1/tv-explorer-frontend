import { useEffect } from 'react';

import './SeriesModal.css';

function SeriesModal({ onClose, show }) {
useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        onClose();
    }
    }

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
    document.body.style.overflow = originalOverflow;
    document.removeEventListener('keydown', handleEscapeKey);
    };
}, [onClose]);

if (!show) {
    return null;
}

const title = show.name || 'Serie sin título';
const imageUrl = show.image?.original || show.image?.medium;
const rating = show.rating?.average ?? 'No disponible';
const genres = show.genres?.length
    ? show.genres
    : ['Género no disponible'];
const summary = show.summary
    ? show.summary.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
    : 'No hay una descripción disponible para esta serie.';

function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
    onClose();
    }
}

return (
    <div
    className="series-modal"
    onMouseDown={handleOverlayMouseDown}
    >
    <section
        className="series-modal__dialog"
        aria-labelledby="series-modal-title"
        aria-modal="true"
        role="dialog"
    >
        <button
        className="series-modal__close"
        aria-label="Cerrar detalles"
        autoFocus
        onClick={onClose}
        type="button"
        >
        ×
        </button>

        <div className="series-modal__media">
        {imageUrl ? (
            <img
            className="series-modal__image"
            alt={`Póster de ${title}`}
            src={imageUrl}
            />
        ) : (
        <div
            className="series-modal__image-placeholder"
            aria-hidden="true"
            >
            TV
            </div>
        )}
        </div>

        <div className="series-modal__content">
            <p className="series-modal__eyebrow">Detalles de la serie</p>

            <h2 className="series-modal__title" id="series-modal-title">
            {title}
            </h2>

            <div className="series-modal__genres">
            {genres.map((genre) => (
            <span className="series-modal__genre" key={genre}>
                {genre}
            </span>
            ))}
        </div>

        <p className="series-modal__summary">{summary}</p>

            <dl className="series-modal__metadata">
            <div className="series-modal__metadata-item">
            <dt className="series-modal__metadata-label">Calificación</dt>
            <dd className="series-modal__metadata-value">★ {rating}</dd>
        </div>

        <div className="series-modal__metadata-item">
            <dt className="series-modal__metadata-label">Estado</dt>
            <dd className="series-modal__metadata-value">
                {show.status || 'No disponible'}
            </dd>
        </div>

            <div className="series-modal__metadata-item">
            <dt className="series-modal__metadata-label">Idioma</dt>
            <dd className="series-modal__metadata-value">
                {show.language || 'No disponible'}
            </dd>
            </div>

            <div className="series-modal__metadata-item">
            <dt className="series-modal__metadata-label">Estreno</dt>
            <dd className="series-modal__metadata-value">
                {show.premiered || 'No disponible'}
            </dd>
            </div>
        </dl>

        {show.url && (
            <a
            className="series-modal__source"
            href={show.url}
            rel="noreferrer"
            target="_blank"
            >
            Ver información en TVmaze
            <span aria-hidden="true">↗</span>
            </a>
        )}
        </div>
    </section>
    </div>
);
}

export default SeriesModal;