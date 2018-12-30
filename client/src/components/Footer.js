import React from 'react';
import logo from '../images/docas_logo.png';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <footer className="row">
                    <div className="col-xl-4 d-flex flex-column align-items-center">
                        <div className="footer-logo">
                            <Link to="/">
                                <img alt="logo-footer" className="logo-footer" src={logo} />
                            </Link>
                            <p>Język: <span className="text-primary">Polski (POL)</span></p>
                        </div>
                    </div>
                    <div className="col-xl-4 d-flex flex-column align-items-center">
                        <div className="d-flex flex-column">
                        <p className="font-weight-bold">Kontakt</p>
                            <ul>
                                <li className="p-footer">ul. Wrocławska</li>
                                <li className="p-footer">123 00-000 Wrocław</li>
                                <li className="p-footer">pomoc@docas.pl</li>
                                <li className="text-primary p-footer">+48(0) 000 000 00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 d-flex flex-column align-items-center">
                    <p>Zgłoś brakujący formularz</p>
                    <a href="https://docas24.bpower2.com/index.php/site/login" className="btn btn-primary report">Zgłoś</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;