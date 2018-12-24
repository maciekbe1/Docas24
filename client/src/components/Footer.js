import React from 'react';
import logo from '../images/docas_logo.png';
import { Link, NavLink } from 'react-router-dom';
import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        let style = {
            width : '124px' 
        }
        let width = {
            width : '295px'
        }
        return(
            <div className="container-fluid">
                <footer className="row">
                    <div className="col-lg-2 col-md-12 d-flex flex-column align-items-end">
                        <div>
                            <div>
                                <Link to="/">
                                    <img alt="logo-footer" className="logo-footer" src={logo} />
                                </Link>
                            </div>
                            <br/>
                            <br/>
                            <p>Język: <span className="text-primary">Polski (POL)</span></p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 d-flex">
                        <div className="col d-flex flex-column align-items-end">
                            <div>
                                <p className="font-weight-bold">Skrócone menu</p>
                                <br/>
                                <ul>
                                    <li className="nav-item p-footer">Menu 1</li>
                                    <li className="nav-item p-footer">Menu 2</li>
                                    <li className="nav-item p-footer">Menu 3</li>
                                    <li className="nav-item p-footer">Menu 4</li>
                                    <li className="nav-item p-footer">Menu 5</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <div>
                                <p className="font-weight-bold">Wsparcie techniczne</p>
                                <br/>
                                <p className="p-footer" style={style}>ul. Wrocławska 123 00-000 Wrocław</p>
                                <p className="p-footer"></p>
                                <p className="p-footer">pomoc@docas.pl</p>
                                <p className="text-primary p-footer">+48(0) 000 000 00</p>
                            </div>
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <div style={width}>
                                <p className="font-weight-bold">Newsletter</p>
                                <br/>
                                <p className="p-footer">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p> 
                                <input className="docas-input-small" placeholder="Adres-email" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
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