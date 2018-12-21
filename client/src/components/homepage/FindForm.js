import React from 'react'
import home_bg from '../../images/01_Home_bg.png';


const FindForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 block-find-form">
                    <h1>Znajdź formularz:</h1>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control docas-input" placeholder="Wpisz jakiego formularza szukasz" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                        <i className="fas fa-search fa-2x"></i>
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-primary docas-find-form-button">SZUKAJ</button>
                </div>
                <div className="col-lg-6">
                    <img alt="home" className="find-form-image" src={home_bg} />
                </div>
            </div>
        </div>
    )
}

export default FindForm;