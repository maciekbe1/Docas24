import React from 'react';
import logo from '../images/docas_logo.png';
import { Link, NavLink } from 'react-router-dom';
import '../styles/footer.css';
import euroDotation from '../images/ue_dof_grafika.png'

class Footer extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <footer>
                    <div className="row">
                        <div className="col-sm-3 d-flex flex-column align-items-center">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img alt="logo-footer" className="logo-footer" src={logo} />
                                </Link>
                                <p>Język: <span className="text-primary">Polski (POL)</span></p>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex flex-column align-items-center">
                            <div className="d-flex flex-column">
                            <p className="font-weight-bold text-center">Kontakt</p>
                                <ul className="text-center">
                                    <li className="p-footer font-weight-bold">MP NEW sp. z o.o. w LEŻAJSKU</li>
                                    <li className="p-footer">ul. Ogrodowa 22</li>
                                    <li className="p-footer">Leżajsk 37-300</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex flex-column align-items-center">
                            <div className="d-flex flex-column">
                                <p className="font-weight-bold text-center">Skrócone Menu</p>
                                <div className="row justify-content-center shortcut-menu">
                                        <span className="p-footer mx-2">
                                            <NavLink activeClassName="selected" to="/help">Pomoc</NavLink>
                                        </span>
                                        <span className="p-footer mx-2">
                                            <NavLink activeClassName="selected" to="/contact">Kontakt</NavLink>
                                        </span>
                                        <span className="p-footer mx-2">
                                            <NavLink activeClassName="selected" to="/forms">Formularze</NavLink>
                                        </span>
                                        <span className="p-footer mx-2">
                                            <NavLink activeClassName="selected" to="/regulations">Regulamin</NavLink>
                                        </span>
                                        <span className="p-footer mx-2">
                                            <NavLink activeClassName="selected" to="/payments">Pakiety Premium</NavLink>
                                        </span>
                                        <span className="p-footer mx-2">
                                            <NavLink activeClassName="selected" to="/news">Aktualności</NavLink>
                                        </span>
                                        <span className="p-footer mx-2">
                                            <a className="" href="http://app.docas24.com/index.php/site/login">Zaloguj się</a>
                                        </span>
                                        <span className="p-footer mx-2">
                                            <NavLink activeClassName="selected" to="/register">Rejestracja</NavLink>
                                        </span>
                                        <span className="p-footer mx-2">
                                            <NavLink activeClassName="selected" to="/privacy-policy">Polityka Prywatności</NavLink>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 d-flex flex-column align-items-center font-weight-bold">
                            <p>Zgłoś brakujący formularz</p>
                            <a href="https://app.docas24.com/index.php/site/login" className="btn btn-primary report">Zgłoś</a>
                        </div>
                    </div>
                    <div className="container text-center">
                    <img className="dotation-image" alt="dotation" src={euroDotation}/>
                        <p className="p-footer h-100">Projekt współfinansowany ze środków Regionalnego Programu Operacyjnego Województwa Podkarpackiego na lata 2014-2020.</p>
                    </div>
                    <div className="footer-social-media container">
                        <div className="row">
                            <div className="col-4 d-flex justify-content-center">
                                <a href="https://www.facebook.com/docas24/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <a href="https://twitter.com/docas24" className="twitter"><i className="fab fa-twitter"></i></a>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <a href="https://www.linkedin.com/company/docas24/" className="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}

export default Footer;