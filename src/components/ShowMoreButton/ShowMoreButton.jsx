import Icon from '../Icon/Icon.jsx';
import { RESULTS_PER_PAGE } from '../../utils/config.js';
import './ShowMoreButton.css';

function ShowMoreButton({ onClick, remainingCount }) {
  if (remainingCount <= 0) {
    return null;
  }

  const nextResultCount = Math.min(
    RESULTS_PER_PAGE,
    remainingCount,
  );

  const buttonLabel = nextResultCount === 1
    ? 'Mostrar 1 serie más'
    : `Mostrar ${nextResultCount} series más`;

  return (
    <div className="show-more-button">
      <button
        className="show-more-button__control"
        onClick={onClick}
        type="button"
      >
        {buttonLabel}

        <Icon
          className="show-more-button__icon"
          name="plus"
        />
      </button>

      <p className="show-more-button__remaining">
        {remainingCount} resultados pendientes
      </p>
    </div>
  );
}

export default ShowMoreButton;