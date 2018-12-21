import React from 'react';
import '../../styles/homepage.css';
import FindForm from '../homepage/FindForm';
import LastForms from '../homepage/LastForms';
import ExploreDocas from '../homepage/ExploreDocas';
import Statistics from '../homepage/Statistics';
import News from '../homepage/News';
import forms from '../../data/forms.json';

const formList = forms;

class HomePage extends React.Component {
    render() {
        return (
            <div className="home">
                <FindForm />
                <LastForms forms={formList}/>
                <ExploreDocas />
                <Statistics />
                <News />
            </div>
        );
    }
}

export default HomePage;