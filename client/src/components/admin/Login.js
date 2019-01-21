import React from 'react';
import firebase from "firebase";

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    userLogin = () => {

        let email = this.state.email + "@gmail.com";
        let password = this.state.password;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        });

    }

    emailValue = (e) => {
        this.setState({email: e.target.value})
    }

    passwordValue = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <div className="container login">
                <div className="row">
                    <div className="login-form">
                        <input onChange={this.emailValue} name="login" type="text" placeholder="login" />
                        <input onChange={this.passwordValue} name="password" type="password" placeholder="hasło" />
                        <button onClick={this.userLogin} className="btn docas-btn-primary login-btn">Zaloguj</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;