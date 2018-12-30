import React, { Component } from 'react';
import computer_bg from '../../images/01_Home_computer.png';
import line_right from '../../images/01_Home_bg_line_2.png';

class ExploreDocas extends Component {
    render() {
        return (
            <div className="container-fluid explore-docas">
                <div className="row">
                    <img alt="lines" src={line_right} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="macbook col-xl-6">
                            <img alt="computer" src={computer_bg} />
                        </div>
                        <div className="col-xl-6">
                            <div className="explore-docas-text">
                                <h2>Poznaj Docas24.com</h2>
                                <p>Serwis internetowy wspierający wypełnianie, składanie i archiwizowanie dokumentów elektronicznych przygotowywanych dla urzędów, banków i innych instytucji.</p>
                                <div className="explore-docas-btns">
                                    <a href="https://docas24.bpower2.com/index.php/site/login" className="btn btn-primary">Zaloguj się</a>
                                    <a href="https://docas24.bpower2.com/index.php/site/register?group=4abb22c8268736a007580b2adff88ff8" className="btn btn-outline-primary">Zarejestruj się</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ExploreDocas;