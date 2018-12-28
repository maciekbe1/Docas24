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
        console.log(this.state.active)
        if (this.state.active) {
            this.setState({active: ''})
        } else {
            this.setState({active: 'is-active'})
        }
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
                                <NavLink activeClassName="selected" to="/partners">Partnerzy</NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="https://docas24.bpower2.com/index.php/site/register">Rejestracja</a>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/help">Pomoc</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/demo">Demo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="selected" to="/contact">Kontakt</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-primary log-in" href="https://docas24.bpower2.com/index.php/site/login">Zaloguj się</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
