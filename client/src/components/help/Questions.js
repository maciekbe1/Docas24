import React, { Component } from 'react';
import Question from './Question';
import lines_left from '../../images/01_Home_bg_line_3.png';


class Questions extends Component {
    state = {
        questions: this.props.questions,
    }
    render() {
        return (
            <div className="container-fluid questions">
                <div className="row">
                    <img src={lines_left} alt="lines" />
                </div>
                <div className="container">
                    <h2 className="text-center">Najczęściej zadawane pytania</h2>
                    {this.state.questions.map(question => {
                         return (
                            <section className="question" key={question.id}>
                                <Question id={question.id} title={question.title} text={question.text} />
                            </section>
                    )})}
                </div>
            </div>
        );
    }

}

export default Questions;