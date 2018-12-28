import React from 'react';
import logo from '../images/docas_logo.png';
import { Link, NavLink } from 'react-router-dom';
import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        let style = {
            width : '124px'
        }
        return(
            <div className="container-fluid">
                <footer className="row">
                    <div className="col-xl-3 d-flex flex-column align-items-end">
                        <div className="footer-logo">
                            <Link to="/">
                                <img alt="logo-footer" className="logo-footer" src={logo} />
                            </Link>
                            <p>Język: <span className="text-primary">Polski (POL)</span></p>
                            <p className="text-primary p-footer d-xl-none">+48(0) 000 000 00</p>
                        </div>
                    </div>
                    <div className="col-xl-7 d-none d-xl-flex">
                        <div className="col-3 d-flex flex-column align-items-end">
                            <p className="font-weight-bold">Skrócone menu</p>
                            <ul>
                                <li className="nav-item p-footer">Menu 1</li>
                                <li className="nav-item p-footer">Menu 2</li>
                                <li className="nav-item p-footer">Menu 3</li>
                                <li className="nav-item p-footer">Menu 4</li>
                                <li className="nav-item p-footer">Menu 5</li>
                            </ul>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-center">
                            <p className="font-weight-bold">Wsparcie techniczne</p>
                            <p className="p-footer" style={style}>ul. Wrocławska 123 00-000 Wrocław</p>
                            <p className="p-footer"></p>
                            <p className="p-footer">pomoc@docas.pl</p>
                            <p className="text-primary p-footer">+48(0) 000 000 00</p>
                        </div>
                        <div className="col-5 d-flex flex-column align-items-start">
                            <p className="font-weight-bold">Newsletter</p>
                            <p className="p-footer">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                            <input className="docas-input-small" placeholder="Adres-email" />
                        </div>
                    </div>
                    <div className="col-xl-2 docas24-footer-nav">
                        <p className="font-weight-bold">Docas24</p>
                        <ul>
                            <li className="nav-item p-footer">
                            <NavLink to="/pages/about">O nas</NavLink>
                            </li>
                            
                            <li className="nav-item p-footer">
                            <NavLink to="/pages/carrer">Kariera</NavLink>
                            </li>
                            
                            <li className="nav-item p-footer">
                            <NavLink to="/pages/help">Pomoc</NavLink>
                            </li>
                            <li className="nav-item p-footer">
                            <NavLink to="/pages/rodo">RODO</NavLink>
                            </li>
                            <li className="nav-item p-footer">
                            <NavLink to="/pages/faq">Regulamin</NavLink>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;