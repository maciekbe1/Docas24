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
                        <div className="macbook col-md-6">
                            <img alt="computer" src={computer_bg} />
                        </div>
                        <div className="col-md-6">
                            <div className="explore-docas-text">
                                <h2>Poznaj Docas24.com</h2>
                                <p>Serwis internetowy wspierający wypełnianie, składanie i archiwizowanie dokumentów elektronicznych przygotowywanych dla urzędów, banków i innych instytucji.</p>
                                <div className="explore-docas-btns">
                                    <button className="btn btn-primary">Zaloguj się</button>
                                    <button className="btn btn-outline-primary">Demo</button>
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