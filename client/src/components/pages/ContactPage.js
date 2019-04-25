import React from 'react';
import lines from '../../images/01_Home_bg_line_2.png';
import contactImg from '../../images/04_Contact_bg.png'
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
                        <p>MP NEW sp. z o.o. w Rzeszowie</p>
                    </div>
                    <div className="email">
                        <h5>Adres</h5>
                        <p>ul. Tulipanowa 5</p>
                        <p>35-604 Rzeszów</p>
                    </div>
                    <div className="phone-number">
                        <h5>Informacje</h5>
                        <p>NIP 8161705454</p>
                        <p>KRS 0000682921</p>
                        <p>REGON 367543704</p>
                    </div>
                </div>
                <div className="container company-info">
                    <div className="row">
                        <div className="col-6 contact-image-column">
                            <img alt="contact" src={contactImg}/>
                        </div>
                        <div className="col-6 contact-info-column">
                            <h5>Firma <span className="font-weight-bold">MP NEW SP. Z O.O. W RZESZOWIE</span> realizuje projekt w ramach działania 1.4.1 Wsparcie MŚP, poddziałanie 1.4.1 Dotacje Bezpośrednie, Regionalny Program Operacyjny Województwa Podkarpackiego na lata 2014-2020.</h5>

                            <h5><span className="font-weight-bold">Tytuł projektu:</span> Stworzenie serwisu internetowego wspierającego wypełnianie, składanie i archiwizowanie dokumentów elektronicznych przygotowywanych dla urzędów, banków i innych instytucji.</h5>

                            <h5><span className="font-weight-bold">Budżet projektu:</span> 623 188,00 PLN, dofinansowanie ze środków UE wynosi 332 512,50 PLN.</h5>

                            <h5><span className="font-weight-bold">Okres realizacji projektu:</span> 01/01/2018 – 30/03/2019.</h5>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactPage;