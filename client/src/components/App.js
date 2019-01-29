import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FormsPage from './pages/FormsPage';
import ContactPage from './pages/ContactPage';
import ThankYou from './pages/ThankYou';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import NewsPage from './pages/NewsPage';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
import Admin from './admin/Admin';
import RegisterPage from './pages/RegisterPage';
import Regulations from './pages/Regulations'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Payments from './pages/Payments'
import IdleTimer from 'react-idle-timer';
import firebase from "firebase";
import ScrollToTop from './ScrollToTop'

import '../styles/main.css';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.idleTimer = null
        this.onAction = this.onAction.bind(this)
        this.onActive = this.onActive.bind(this)
        this.onIdle = this.onIdle.bind(this)
        this.state = {
            loggedAs: ''
        }
      }

      onAction = (e) => {
        // console.log('user did something', e)
      }

      onActive = (e) => {
        // console.log('user is active', e)
        // console.log('time remaining', this.idleTimer.getRemainingTime())
      }

      onIdle = (e) => {
        // console.log('user is idle', e)
        // console.log('last active', this.idleTimer.getLastActiveTime())
        firebase.auth().signOut().then(function() {
            console.log('Wylogowano')
          }).catch(function(error) {
            console.log(error)
          });
      }
      render() {
              return (
        <div>
            <HashRouter>
            <ScrollToTop>
                <div>
                <IdleTimer
                    ref={ref => { this.idleTimer = ref }}
                    element={document}
                    onActive={this.onActive}
                    onIdle={this.onIdle}
                    onAction={this.onAction}
                    debounce={1000}
                    timeout={1000 * 60 * 10} />
                <Header />
                <SocialMedia />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/success" component={ThankYou} />
                    <Route path="/help" component={HelpPage} />
                    <Route path="/forms" component={FormsPage} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/regulations" component={Regulations} />
                    <Route path="/privacy-policy" component={PrivacyPolicy} />
                    <Route path="/payments" component={Payments} />
                <Footer />
                </div>
                </ScrollToTop>
            </HashRouter>
        </div>
    )
      }

}
export default App;