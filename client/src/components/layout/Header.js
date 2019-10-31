import React from 'react';
import { NavLink } from 'react-router-dom';

const listElementStyle = {
    padding: '.5rem 2rem .5rem 0'
}

const Header = () => (
    <div className="container py-2">
        <ul className="nav">
            <li className="nav-item">
                <NavLink style={ listElementStyle } className="nav-link" activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={ listElementStyle } className="nav-link" activeClassName="active" to="/libros">Libros</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={ listElementStyle } className="nav-link" activeClassName="active" to="/autores">Autores</NavLink>
            </li>
        </ul>
    </div>
);

export default Header;