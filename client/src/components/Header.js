import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/docas_logo.png'
import '../styles/header.css';
import '../styles/hamburger.css';

class Header extends React.Component {
    constructor(props) {
      super(props);
		
      this.state = {
         active: ''
      }
    }
    
    activeClass = () => {
        if (this.state.active) {
            this.setState({active: ''})
            
        } else {
            this.setState({active: 'is-active'})
        }
    }
    disableMenu = () => {
        this.setState({active: ''});
        const btn = document.querySelector(".hamburger--slider");
        const nav = document.querySelector(".navbar-collapse");
        btn.setAttribute("aria-expanded", "false");
        nav.classList.remove("show");
    }
    render() {
        return (
            <header className="header container-fluid">
                <nav className="navbar navbar navbar-light bg-light navbar-expand-xl">
                    <Link className="navbar-brand offset-xl-1" to="/">
                        <img alt="logo" className="logo" src={logo} />
                    </Link>
                    <button className={"navbar-toggler hamburger hamburger--slider " + this.state.active} type="button" data-toggle="collapse" data-target="#navbarCollapse" onClick={() => this.activeClass()}>
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav offset-xl-2">
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/help" onClick={this.disableMenu}>Pomoc</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/contact" onClick={this.disableMenu}>Kontakt</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/forms" onClick={this.disableMenu}>Formularze</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/news" onClick={this.disableMenu}>Aktualności</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/regulations" onClick={this.disableMenu}>Regulamin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/register" onClick={this.disableMenu}>Rejestracja</NavLink>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className="btn btn-outline-primary log-in" href="http://app.docas24.com/index.php/site/login">Zaloguj się</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
