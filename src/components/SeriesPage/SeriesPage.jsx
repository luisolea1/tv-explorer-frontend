import './SeriesPage.css';

function SeriesPage() {
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
        <p className="series-page__placeholder">
        El formulario de búsqueda aparecerá aquí.
        </p>
    </section>
    </main>
);
}

export default SeriesPage;