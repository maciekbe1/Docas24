import React from 'react';
import axios from 'axios'
import docas from '../api/docas';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
                login: '',
                password: '',
                repeatPassword: '',
                email: ''
        }
    }
    
    onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const response = await docas.post('/api/registerDocasUser?groupId=5c16f5ad165ad5a46d17f0acfed84dfe',
        // {login: this.state.login, password: this.state.password}
        {user: this.state}
        
    );
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render(){
        return(
            <div className="register-form">
                    <p>DANE DO REJESTRACJI</p>
                <form onSubmit={this.onSubmit}>
                        <div>
                            <input
                                value={this.state.login}
                                onChange={e => this.onChange(e)}
                                className="docas-input"
                                name="login"
                                component="input"
                                type="text"
                                placeholder="Login"
                            />
                        </div>
                        <div>
                            <input
                                value={this.state.password}
                                onChange={e => this.onChange(e)}
                                className="docas-input"
                                name="password"
                                component="input"
                                type="text"
                                placeholder="Hasło"
                            />
                        </div>
                        <div>
                            <input
                                value={this.state.repeatPassword}
                                onChange={e => this.onChange(e)}
                                className="docas-input"
                                name="repeatPassword"
                                component="input"
                                type="text"
                                placeholder="Powtórz hasło"
                            />
                        </div>
                        <div>
                            <input
                                value={this.state.email}
                                onChange={e => this.onChange(e)}
                                className="docas-input"
                                name="email"
                                component="input"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <input
                            // onClick={e => this.onSubmit(e)}
                            type="submit"
                            className="docas-btn-primary"
                            value="Wyślij"
                        />
                </form>
            </div>
        )
    }
}

export default RegisterForm;