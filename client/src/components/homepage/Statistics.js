import React, { Component } from 'react';
import line_left from '../../images/01_Home_bg_line_3.png';

class Statistics extends Component {
    render() {
        return (
            <div className="container-fluid statistics">
                <div className="row">
                    <img alt="lines" src={line_left} />
                </div>
                <div className="container">
                    <div className="row statistics-row">
                        <div className="statistics-value">
                            <h5>Płatność</h5>
                            <p className="selected"><span>50</span>ZŁ/MSC</p>
                        </div>
                        <div className="statistics-value">
                            <h5>Użytkowników</h5>
                            <span className="selected">2000</span>
                        </div>
                        <div className="statistics-value">
                            <h5>Dokumentów</h5>
                            <span className="selected">1500</span>
                        </div>
                        <div className="statistics-value">
                            <h5>Dostępność</h5>
                            <p className="selected"><span>365</span>DNI</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Statistics;