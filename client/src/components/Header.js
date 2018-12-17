import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/docas_logo.png'
import '../styles/main.css'

const Header = (props) => {
    return (
        <div className="container">
            <nav className="nav">
                <Link to="/">
                    <img alt="logo" className="logo" src={logo} />
                </Link>
                <ul className="">
                    <li>
                        <Link to="/pages/partners">Partnerzy</Link>
                    </li>
                    <li>
                        <Link to="/pages/integration">Integracja</Link>
                    </li>
                    <li>
                        <Link to="/pages/help">Pomoc</Link>
                    </li>
                    <li>
                        <Link to="/pages/register">Rejestracja</Link>
                    </li>
                </ul>
                <a href="https://b2ng.bpower2.com/index.php/site/login">Zaloguj</a>
            </nav>
        </div>
    )
}

export default Header
