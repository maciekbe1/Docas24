import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FormsPage from './pages/FormsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

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
                    <Route path="/help" component={HelpPage} />
                    <Route path="/forms" component={FormsPage} />
                <Footer />
                </div>
            </HashRouter>
        </div>
    )
}
export default App;