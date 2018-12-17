import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/docas_logo.png'
import '../styles/header.css';

const Header = (props) => {
    return (
        <div className="container">
            <nav>
                <Link className="" to="/">
                    <img alt="logo" className="logo" src={logo} />
                </Link>
                <ul className="nav nav-list">
                    <li className="nav-item">
                        <NavLink activeClassName="selected" to="/pages/partners">Partnerzy</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" to="/pages/integration">Integracja</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" to="/pages/help">Pomoc</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" to="/pages/register">Rejestracja</NavLink>
                    </li>
                    <li className="nav-item">
                        <a target="_blank" href="https://b2ng.bpower2.com/index.php/site/login">Zaloguj</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
