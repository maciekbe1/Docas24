import React from 'react';
import lines from '../../images/01_Home_bg_line_2.png';
import '../../styles/contact.css';
import Form from '../contact/Form';
import Map from '../contact/Map';

class ContactPage extends React.Component {
    state = {
        check: "fas fa-check-circle"
    }
    onChecked = (e) => {
        var elemClass = e.target.classList;
        console.log(elemClass.value)
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid contact-details">
                    <div className="row">
                        <img src={lines} className="col-12" alt="lines" />
                    </div>
                    <div className="container p-0 contact-details-info">
                        <div className="row">
                            <h3 className="col-12 text-center">Skontaktuj sie z nami</h3>
                            <div className="col-lg-6">
                                <Map />
                            </div>
                            <div className="col-lg-6">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="col-12 text-center">Dane kontaktowe</h3>
                <div className="container contact-details-blocks">                
                    <div className="address">
                        <h5>Nazwa firmy</h5>
                        <p>MP NEW sp. z o.o. w LEŻAJSKU</p>
                    </div>
                    <div className="email">
                        <h5>Adres</h5>
                        <p>ul. Ogrodowa 22</p>
                        <p>Leżajsk 37-300</p>
                    </div>
                    <div className="phone-number">
                        <h5>Informacje</h5>
                        <p>NIP 8161705454</p>
                        <p>KRS 0000682921</p>
                        <p>REGON 367543704</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactPage;