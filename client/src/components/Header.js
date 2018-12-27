import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/docas_logo.png'
import '../styles/header.css';

const Header = (props) => {
    return (
        <header className="header container-fluid">


            
            <nav className="navbar navbar navbar-light bg-light navbar-expand-lg">
                <Link className="navbar-brand offset-xl-1" to="/">
                    <img alt="logo" className="logo" src={logo} />
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav offset-xl-2">
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
                        <li className="nav-item">
                            <a className="btn btn-outline-primary log-in" href="https://b2ng.bpower2.com/index.php/site/login">Zaloguj się</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
