import Icon from '../Icon/Icon.jsx';
import './NothingFound.css';

function NothingFound({ query }) {
return (
    <section
    className="nothing-found"
    aria-labelledby="nothing-found-title"
    role="status"
    >
    <Icon
        className="nothing-found__icon"
        name="question"
    />

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