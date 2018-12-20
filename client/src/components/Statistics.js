import React, { Component } from 'react';

class Statistics extends Component {
    render() {
        return (
            <div className="container-fluid statistics">
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