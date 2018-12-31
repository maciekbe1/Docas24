import React from 'react';
import contact_bg from '../../images/04_Contact_bg.png';
import lines from '../../images/01_Home_bg_line_2.png';
import '../../styles/contact.css';

class ContactPage extends React.Component {
    state = {
        checked: false
    }
    onChecked = (e) => {
        if (this.state.checked) {
            this.setState({checked: false})
        } else {
            this.setState({checked: true})
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid contact">
                    <div className="row">
                        <img src={contact_bg} alt="contact" />
                    </div>
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-lg-7 contact-us">
                                <h2>Skontaktuj się z Nami</h2>
                                <p>Lorem ipsum dolor sit amet, con sectetu adipiscing elit. In sagittis egestas ante, sed viverra nunc.Lorem ipsum dolor sit amet, con sectetu adipiscing elit. In sagittis egestas ante, sed viverra viverra nunc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid contact-details">
                    <div className="row">
                        <img src={lines} className="col-12" alt="lines" />
                    </div>
                    <div className="container p-0 contact-details-info">
                        <div className="row">
                            <h3 className="col-12 text-center">Dane kontaktowe</h3>
                            <div className="col-lg-6">
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80127.5546854333!2d16.921824554312277!3d51.12716471933781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1spl!2spl!4v1546248135756"></iframe>
                            </div>
                            <div className="col-lg-6">
                                <form>
                                    <input className="col-12" type="text" name="name"placeholder="Imię i nazwisko" />
                                    <input className="col-6" type="text" name="email" placeholder="Adres e-mail" />
                                    <input className="col-6" type="text" name="phone" placeholder="Numer telefonu" />
                                    <textarea className="col-12" placeholder="Treść wiadomości"></textarea>
                                    <div className="form-checkbox-btns">
                                        <span>
                                            <i className={this.state.checked ? 'fas fa-check-circle fa-2x' : 'far fa-circle fa-2x'} onClick={this.onChecked}></i>
                                            <p>Zapoznałem się z Regulaminem i Polityką Prywatności</p>
                                            <input type="checkbox" name="gender" value="male" />
                                        </span>
                                        <span>
                                            <i className={this.state.checked ? 'fas fa-check-circle fa-2x' : 'far fa-circle fa-2x'} onClick={this.onChecked}></i>
                                            <p>Wyślij kopie do mnie</p>
                                            <input type="checkbox" name="gender" value="female" />
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactPage;