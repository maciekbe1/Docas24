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
import firebase from "firebase";
import {newsEnvironment} from '../firebase/config'

class HomePage extends React.Component {
    state = {
        news : [],
        isLoading: true
    }

    componentWillMount() {

        const db = firebase.firestore();
        db.collection(newsEnvironment)
        .orderBy('date', 'desc')
        .limit(3)
        .get().then((snapshot) => {
            let documents = [];
            snapshot.docs.forEach(doc => {
                let items = doc;
                documents.push(items)
            });

          this.setState({
              news : documents,
              isLoading: false
            })

        });
    }
    render() {
        return (
            <div className="home">
                <FindForm forms={forms}/>
                <LastForms forms={forms}/>
                <ExploreDocas />
                <Statistics />
                <News news={this.state.news} />
                <Reviews reviews={reviews}/>
            </div>
        );
    }
}

export default HomePage;