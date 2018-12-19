import React, { Component } from 'react';

class Statistics extends Component {
    render() {
        return (
            <div className="container-fluid statiscs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h5>Płatność</h5>
                            <div className="statistics-value">
                                <span>50</span>
                                <span>zł/msc</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5>Użytkoników</h5>
                            <div className="statistics-value">
                                <span>2000</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5>Dokumentów</h5>
                            <div className="statistics-value">
                                <span>1500</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5>Dostępność</h5>
                            <div className="statistics-value">
                                <span>365</span>
                                <span>dni</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Statistics;