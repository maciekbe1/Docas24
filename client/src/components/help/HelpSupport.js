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
                            <p>Poniżej znajdziesz listę najczęściej zadawanych pytań. Staraliśmy się przewidzieć wszystkie możliwości.</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default HelpSupport;