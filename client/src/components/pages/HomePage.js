import React from 'react';
import '../../styles/home.css';
import FindForm from '../FindForm';
import LastForms from '../LastForms';
import ExploreDocas from '../ExploreDocas';
import forms from '../../data/forms.json';

const formList = forms;

class HomePage extends React.Component {
    render() {
        return (
            <div className="home">
                <FindForm />
                <LastForms forms={formList}/>
                <ExploreDocas />
            </div>
        );
    }
}

export default HomePage;