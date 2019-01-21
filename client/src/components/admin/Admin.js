import React from 'react';
import '../../styles/adminpanel.css';
import firebase from "firebase";
import { config } from '../firebase/config';

import Login from './Login';
import AdminPanel from './AdminPanel';

class Admin extends React.Component {
    state = {
        loggedAs: ''
    }

    componentDidMount() {
        !firebase.apps.length && firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({loggedAs: user.email})
            } else {
                this.setState({loggedAs: ''})
            }
        });
    }

    render() {
        // var adaRef = firebase.database().ref("https://docas24-69429.firebaseio.com/forms");
        // console.log(adaRef)
        if (!this.state.loggedAs) {
            return (
                <Login />
            );
        } else {
            return (
                <AdminPanel login={this.state.loggedAs} />
            );
        }

    }
}

export default Admin;