import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/docas_logo.png'
import '../styles/header.css';

const Header = (props) => {
    return (
        <div className="container">
        <Link className="navbar-brand" to="/">
            <img alt="logo" className="logo" src={logo} />
        </Link>
            <nav className="nav-bar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink activeClassName="selected" to="/pages/partners">Partnerzy</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="selected" to="/pages/contact">Kontakt</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="selected" to="/pages/help">Pomoc</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="http://localhost/index.php/site/register">Rejestracja</a>
                        </li>
                        <li className="nav-item">
                            <a className="docas-btn-transparent" href="https://b2ng.bpower2.com/index.php/site/login">Zaloguj</a>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Header
