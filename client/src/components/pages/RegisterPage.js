import React from 'react';
import '../../styles/register.css'
import home_bg_line from '../../images/01_Home_bg_line.png';
import login_bg from '../../images/08_Login_bg.png';

import Footer from '../Footer'
import RegisterForm from '../RegisterForm'


class RegisterPage extends React.Component {

    render() {
        return (
            <div className="register-page">
                <div className="row">
                    <div className="col">
                        <div className="left-side-strap">
                            <img src={home_bg_line}/>
                        </div>
                    </div>
                    <div className="col">
                    <h1>Zarejestruj się</h1>
                        <RegisterForm />
                    </div>
                    <div className="col">
                        <div className="login-image">
                            <img src={login_bg} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="right-side-strap">
                            <img src={home_bg_line}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default RegisterPage;