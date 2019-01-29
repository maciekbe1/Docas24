import React from 'react';
import '../../styles/register.css';
import registerImg from '../../images/08_Login_bg.png';
import success from '../../images/checked.png';
import axios from 'axios'
import { sha256 } from 'js-sha256';

class RegisterPage extends React.Component {
    state = {
        login: "",
        password: "",
        password_repeat: "",
        email: "",
        send: false
    }
    loginHander = (e) => {
        this.setState({login: e.target.value})
    }
    passwordHander = (e) => {
        this.setState({password: e.target.value})
    }
    password_repeatHander = (e) => {
        this.setState({password_repeat: e.target.value})
    }
    emailHander = (e) => {
        this.setState({email: e.target.value})
    }
    handleSubmit = (e) => {
        var self = this;
        e.preventDefault();
        const login = this.state.login;
        const password = sha256(this.state.password);
        const password_repeat = sha256(this.state.password_repeat);
        const email = this.state.email
        //http://app.docas24.com/index.php/site/register?group=9a5fd6494582c5acad1660e53ab942a0
        //http://localhost/api/registerDocasUser?groupId=5c16f5ad165ad5a46d17f0acfed84dfe'
        axios({
            method: 'post',
            url: 'http://app.docas24.com/index.php/site/register?group=9a5fd6494582c5acad1660e53ab942a0',
            data: {
                "user": {"login": login, "password": password, "password_repeat": password_repeat, "email": email},
                "userInfo": {}
            }
        })
        .then(function (response) {
            console.log(response)
            self.setState({send: true})
        })
        .catch(errors => console.log(errors));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center flex-column">
                    {!this.state.send ? 
                        <div className="d-flex justify-content-center">
                            <form onSubmit={this.handleSubmit} className="d-flex flex-column docas-register-from">
                                <label><h3>Login</h3></label>
                                <input className="docas-input" type="text" onChange={this.loginHander}/>
                                <label><h3>Hasło</h3></label>
                                <input className="docas-input" type="password" onChange={this.passwordHander}/>
                                <label><h3>Powtórz hasło</h3></label>
                                <input className="docas-input" type="password" onChange={this.password_repeatHander}/>
                                <label><h3>Email</h3></label>
                                <input className="docas-input" type="text" onChange={this.emailHander}/>
                                <button type="submit" className="docas-btn-primary margin-inline-start register-button">Wyślij</button>
                            </form>
                        </div>
                        : <div className="d-flex justify-content-center align-items-center flex-column register-success">
                            <h4 className="text-success">Rejestracja udana</h4>
                            <img alt="success" src={success}/>
                            <h2>Dziękujemy!</h2>
                            <h3 className="text-center">Twoje zgłoszenie zostanie odebrane, wkrótce skontaktujemy się z Tobą</h3>
                        </div>
                    }
                    </div>
                    <div className="col-lg-6">
                        <img alt="registry" className="register-image" src={registerImg}/>
                    </div>
                </div>
    
            </div>
        );
    }
}

export default RegisterPage;