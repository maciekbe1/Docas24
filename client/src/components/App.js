import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FormsPage from './pages/FormsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import Header from './Header';
import Footer from './Footer'
import '../styles/main.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Header />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/help" component={HelpPage} />
                    <Route path="/forms" component={FormsPage} />
                <Footer />
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App;