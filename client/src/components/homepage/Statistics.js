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
                        <div className="col-lg-3">
                            <div className="statistics-value">
                                <h5>Płatność</h5>
                                <p><span>50</span>zł/msc</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="statistics-value">
                                <h5>Użytkoników</h5>
                                <span>2000</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="statistics-value">
                                <h5>Dokumentów</h5>
                                <span>1500</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="statistics-value">
                                <h5>Dostępność</h5>
                                <p><span>365</span>dni</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Statistics;