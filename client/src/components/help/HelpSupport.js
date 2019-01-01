import React from 'react';
import help_bg from '../../images/03_Help_bg.png';

const HelpSupport = () => {
    return (
            <div className="container-fluid help">
                <div className="row">
                    <img src={help_bg} alt="help" />
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-7 help-and-support">
                            <h2>Pomoc i wsparcie</h2>
                            <p>Lorem ipsum dolor sit amet, con sectetu adipiscing elit. In sagittis egestas ante, sed viverra nunc.Lorem ipsum dolor sit amet, con sectetu adipiscing elit. In sagittis egestas ante, sed viverra viverra nunc.</p>
                        </div>
                        <div className="text-center d-flex help-btns">
                            <button className="btn docas-btn-primary">Video</button>
                            <button className="btn docas-btn-outline-primary">FAQ</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default HelpSupport;