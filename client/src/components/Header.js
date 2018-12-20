import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/docas_logo.png'
import '../styles/header.css';

const Header = (props) => {
    return (
        <header className="header container-fluid">

            <nav className="nav navbar-expand-lg">

                <Link className="navbar-brand col-lg-2 offset-lg-1" to="/">
                    <img alt="logo" className="logo" src={logo} />
                </Link>

                <ul className="navbar-nav col-lg-5 offset-lg-1">
                    <li className="nav-item">
                        <NavLink activeClassName="selected" to="/pages/partners">Partnerzy</NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="http://localhost/index.php/site/register">Rejestracja</a>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" to="/pages/help">Pomoc</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" to="/pages/demo">Demo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" to="/pages/contact">Kontakt</NavLink>
                    </li>
                </ul>
                        <a className="btn btn-outline-primary log-in" href="https://b2ng.bpower2.com/index.php/site/login">Zaloguj się</a>
            </nav>
        </header>
    )
}

export default Header
