import React from 'react';
import '../../styles/register.css'
import axios from 'axios'
import { sha256 } from 'js-sha256';

class RegisterPage extends React.Component {
    state = {
        login: "",
        password: "",
        password_repeat: "",
        email: ""
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
        e.preventDefault();
        const login = this.state.login;
        const password = sha256(this.state.password);
        const password_repeat = sha256(this.state.password_repeat);
        const email = this.state.email
        //http://app.docas24.com/index.php/site/register?group=9a5fd6494582c5acad1660e53ab942a0
        axios({
            method: 'post',
            url: 'http://localhost/api/registerDocasUser?groupId=5c16f5ad165ad5a46d17f0acfed84dfe',
            data: {
                "user": {"login": login, "password": password, "password_repeat": password_repeat, "email": email},
                "userInfo": {}
            }
        })
        .then(function (response) {
            console.log(response)
          });
    }
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <form onSubmit={this.handleSubmit} className="d-flex flex-column docas-register-from">
                        <label>Login</label>
                        <input className="docas-input" type="text" onChange={this.loginHander}/>
                        <label>Hasło</label>
                        <input className="docas-input" type="password" onChange={this.passwordHander}/>
                        <label>Powtórz hasło</label>
                        <input className="docas-input" type="password" onChange={this.password_repeatHander}/>
                        <label>Email</label>
                        <input className="docas-input" type="text" onChange={this.emailHander}/>
                        <button type="submit" className="docas-btn-primary">Wyślij</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterPage;