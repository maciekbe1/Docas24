import React from 'react'
import HelpSupport from '../help/HelpSupport';
import VideoTutorials from '../help/VideoTutorials';
import Questions from '../help/Questions';
import '../../styles/help.css';
import video from '../../data/video.json';
import questions from '../../data/questions.json';

class HelpPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HelpSupport />
                <VideoTutorials video={video} />
                <Questions questions={questions} />
            </React.Fragment>
        );
    }
}

export default HelpPage;