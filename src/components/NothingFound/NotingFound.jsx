import './NothingFound.css';

function NothingFound({ query }) {
return (
    <section
    className="nothing-found"
    aria-labelledby="nothing-found-title"
    role="status"
    >
    <div className="nothing-found__icon" aria-hidden="true">
        ?
    </div>

    <h2 className="nothing-found__title" id="nothing-found-title">
        No encontramos coincidencias
    </h2>

    <p className="nothing-found__description">
        {query
        ? `No hay resultados para “${query}”. Intenta con otro título.`
        : 'Intenta realizar una búsqueda con otro título.'}
    </p>
    </section>
);
}

export default NothingFound;