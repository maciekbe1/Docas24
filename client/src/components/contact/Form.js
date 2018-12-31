import React from 'react';
import RadioButton from './RadioButton'

const Form = () => {
    return (
        <form>
            <input className="col-12" type="text" name="name"placeholder="Imię i nazwisko" />
            <input className="col-6" type="text" name="email" placeholder="Adres e-mail" />
            <input className="col-6" type="text" name="phone" placeholder="Numer telefonu" />
            <textarea className="col-12" placeholder="Treść wiadomości"></textarea>
            <div className="form-checkbox-btns">
                <RadioButton text={"Zapoznałem się z Regulaminem i Polityką Prywatności"} />
                <RadioButton text={"Wyślij kopie do mnie"} />
            </div>
            <button className="btn docas-btn-primary float-right">Wyślij</button>
        </form>
    );
}

export default Form;