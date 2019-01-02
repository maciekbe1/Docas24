import React from 'react';
import logo from '../images/docas_logo.png';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <footer className="row">
                    <div className="col-sm-4 d-flex flex-column align-items-center">
                        <div className="footer-logo">
                            <Link to="/">
                                <img alt="logo-footer" className="logo-footer" src={logo} />
                            </Link>
                            <p>Język: <span className="text-primary">Polski (POL)</span></p>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center">
                        <div className="d-flex flex-column">
                        <p className="font-weight-bold">Kontakt</p>
                            <ul>
                                <li className="p-footer font-weight-bold">MP NEW sp. z o.o. w LEŻAJSKU</li>
                                <li className="p-footer">ul. Ogrodowa 22</li>
                                <li className="p-footer">Leżajsk 37-300</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column align-items-center">
                    <p>Zgłoś brakujący formularz</p>
                    <a href="https://app.docas24.com/index.php/site/login" className="btn btn-primary report">Zgłoś</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;