import React, { Component } from 'react';
import RadioButton from './RadioButton';
// import ReCaptcha from 'react-recaptcha';

class Form extends Component {
    state = {
        rules: false,
        copy: false,
        name: "",
        email: "",
        phone: "",
        text: ""
    }
    changeForm = (e) => {
        const inputState = {};
        inputState[e.target.name] = e.target.value;
        this.setState(inputState);
    }

    rulesChange = () => {
        var currentState = this.state.rules;
        this.setState({rules: !currentState});
    }

    copyChange = () => {
        var currentState = this.state.copy;
        this.setState({copy: !currentState});
    }

    sendForm = () => {
        var rules = document.querySelector('.form-checkbox-btn p');
        if (!this.state.rules) {
            rules.classList.add("text-danger")
        } else {
            rules.classList.remove("text-danger")
        }
    }

    render() {
        return (
            <form action="https://formspree.io/&#112;&#105;&#111;&#116;&#114;&#46;&#102;&#114;&#117;&#107;&#97;&#99;&#122;&#46;&#115;&#103;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" method="POST">
                <input onChange={this.changeForm} className="col-12 contact-field" type="text" name="name"placeholder="Imię i nazwisko" required />
                <input onChange={this.changeForm} className="col-6 contact-field" type="email" name="email" placeholder="Adres e-mail" required />
                <input onChange={this.changeForm} className="col-6 contact-field" type="text" pattern="\d+" name="phone" placeholder="Numer telefonu" />
                <textarea onChange={this.changeForm} className="col-12 contact-field" name="text" placeholder="Treść wiadomości" required></textarea>
                <div className="form-checkbox-btns">
                    <RadioButton name="rules" action={this.rulesChange} text={"Zapoznałem się z Regulaminem i Polityką Prywatności"} />
                    <RadioButton name="copy" action={this.copyChange} text={"Wyślij kopie do mnie"} />
                    <input type="hidden" name="_cc" value={this.state.copy ? this.state.email : ""} />
                    <input type="hidden" name="_language" value="pl" />
                    <input type="hidden" name="_next" value="http://docas24.com/#/success"/>
                </div>
                <input onClick={this.sendForm} type={this.state.rules ? "submit" : "button"} value="Wyślij" className="btn docas-btn-primary float-right" />
            </form>
        );
    }
}

export default Form;