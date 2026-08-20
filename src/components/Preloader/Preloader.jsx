import './Preloader.css';

function Preloader({ message = 'Buscando series...' }) {
return (
    <div className="preloader" aria-live="polite" role="status">

    <span className="preloader__circle" aria-hidden="true" />
    <p className="preloader__message">{message}</p>
    
    </div>
);
}

export default Preloader;