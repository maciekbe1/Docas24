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

import '../styles/main.css';
const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
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
                <Footer />
                </div>
            </HashRouter>
        </div>
    )
}
export default App;