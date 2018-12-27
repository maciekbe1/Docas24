import React from 'react';
import '../../styles/homepage.css';
import FindForm from '../homepage/FindForm';
import LastForms from '../homepage/LastForms';
import ExploreDocas from '../homepage/ExploreDocas';
import Statistics from '../homepage/Statistics';
import News from '../homepage/News';
import Reviews from '../homepage/Reviews';
import forms from '../../data/forms.json';
import reviews from '../../data/reviews.json';

class HomePage extends React.Component {
    render() {
        return (
            <div className="home">
                <FindForm forms={forms}/>
                <LastForms forms={forms}/>
                <ExploreDocas />
                <Statistics />
                <News />
                <Reviews reviews={reviews}/>
            </div>
        );
    }
}

export default HomePage;