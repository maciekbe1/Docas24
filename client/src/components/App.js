import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FormsPage from './pages/FormsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import Header from './Header';
import '../styles/main.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Header />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/pages/contact" exact component={ContactPage} />
                    <Route path="/pages/forms" exact component={FormsPage} />
                    <Route path="/pages/help" exact component={HelpPage} />
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App;