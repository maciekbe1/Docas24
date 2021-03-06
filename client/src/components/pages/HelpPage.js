import React from 'react'
import HelpSupport from '../help/HelpSupport';
import Questions from '../help/Questions';
import '../../styles/help.css';
import questions from '../../data/questions.json';

class HelpPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HelpSupport />
                <Questions questions={questions} />
            </React.Fragment>
        );
    }
}

export default HelpPage;