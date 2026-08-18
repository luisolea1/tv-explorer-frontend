import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.jsx';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link
          className="header__brand"
          aria-label="Ir a la página principal"
          to="/"
        >
          <span className="header__brand-mark" aria-hidden="true">
            TV
          </span>
          <span className="header__brand-name">Explorer</span>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;