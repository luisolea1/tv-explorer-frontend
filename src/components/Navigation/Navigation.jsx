import { NavLink } from 'react-router-dom';

import './Navigation.css';

function getNavigationLinkClassName({ isActive }) {
return `navigation__link${
    isActive ? ' navigation__link_active' : ''
}`;
}

function Navigation() {
return (
    <nav className="navigation" aria-label="Navegación principal">
    <ul className="navigation__links">
        <li className="navigation__item">
        <NavLink
            className={getNavigationLinkClassName}
            end
            to="/"
        >
            Inicio
        </NavLink>
        </li>

        <li className="navigation__item">
        <NavLink
            className={getNavigationLinkClassName}
            to="/series"
        >
            Explorar series
        </NavLink>
        </li>
    </ul>
    </nav>
);
}

export default Navigation;