import React from 'react'

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

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    change = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render(){
        return(
            <div className="register-form">
                    <p>DANE DO REJESTRACJI</p>
                <form>
                        <div>
                            <input
                                value={this.state.login}
                                onChange={e => this.change(e)}
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
                                onChange={e => this.change(e)}
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
                                onChange={e => this.change(e)}
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
                                onChange={e => this.change(e)}
                                className="docas-input"
                                name="email"
                                component="input"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <input
                            onClick={e => this.onSubmit(e)}
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