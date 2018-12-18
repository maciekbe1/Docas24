import React, { Component } from 'react';
import computer_bg from '../images/01_Home_computer.png';

class ExploreDocas extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="macbook col-md-6">
                            <img alt="computer" src={computer_bg} />
                        </div>
                        <div className="explore-docas col-md-6">
                            <h2>Poznaj Docas24.com
                            </h2>
                            <p>Serwis internetowy wspierający wypełnianie, składanie i archiwizowanie dokumentów elektronicznych przygotowywanych dla urzędów, banków i innych instytucji.
                            </p>
                            <div className="explore-docas-btns">               <button >Zaloguj się</button>
                                <button>Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ExploreDocas;