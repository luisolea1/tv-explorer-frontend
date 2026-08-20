import Icon from '../Icon/Icon';
import './ErrorMessage.css';

function ErrorMessage({
message = 'No fue posible obtener las series. Inténtalo nuevamente.',
onRetry,
}) {
return (
    <section
    className="error-message"
    aria-labelledby="error-message-title"
    role="alert"
    >
    <Icon
        className="error-message__icon"
        name="warning"
    />
    <h2 className="error-message__title" id="error-message-title">
        Algo salió mal
    </h2>

    <p className="error-message__description">{message}</p>

    {onRetry && (
        <button
        className="error-message__button"
        onClick={onRetry}
        type="button"
        >
        Intentar de nuevo
        </button>
    )}
    </section>
);
}

export default ErrorMessage;