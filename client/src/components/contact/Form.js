import React, { Component } from 'react';
import RadioButton from './RadioButton';
// import ReCaptcha from 'react-recaptcha';

class Form extends Component {
    state = {
        rules: false,
        copy: false
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

    }

    render() {
        return (
            <form>
                <input onChange={this.changeForm} className="col-12" type="text" name="name"placeholder="Imię i nazwisko" />
                <input onChange={this.changeForm} className="col-6" type="text" name="email" placeholder="Adres e-mail" />
                <input onChange={this.changeForm} className="col-6" type="text" name="phone" placeholder="Numer telefonu" />
                <textarea onChange={this.changeForm} className="col-12" name="text" placeholder="Treść wiadomości"></textarea>
                <div className="form-checkbox-btns">
                    <RadioButton name="rules" action={this.rulesChange} text={"Zapoznałem się z Regulaminem i Polityką Prywatności"} />
                    <RadioButton name="copy" action={this.copyChange} text={"Wyślij kopie do mnie"} />
                </div>
                <button onClick={this.sendForm} className="btn docas-btn-primary float-right">Wyślij</button>
            </form>
        );
    }
}

export default Form;