import React from 'react';
import home_bg from '../../images/01_Home_bg.png';
import '../../styles/home.css'

class HomePage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Znajdz Formularz</h1>
                            <input 
                                type="text"
                                placeholder="Wpisz jakiego formularza szukasz"
                                className="docas-input" 
                            />
                            <button className="docas-btn-primary">SZUKAJ</button>
                        </div>
                        <div className="">
                            <img alt="home" className="home-image" src={home_bg} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;