import React, { Component } from 'react';

class Reviews extends Component {
    state = {
        reviews: this.props.reviews,
        number: 0
    }
    nextReview = () => {
        if (this.state.number < this.state.reviews.length - 1){
            this.setState({number: this.state.number + 1})
        } else {
            this.setState({number: 0})
        }
    }
    prevReview = () => {
        if (this.state.number){
            this.setState({number: this.state.number - 1})
        } else {
            this.setState({number: this.state.reviews.length - 1})
        }
    }
    render() {
        return (
            <div className="container block-reviews">
                <h2 className="text-center">Opinie naszych klientów</h2>
                <div>
                    {this.state.reviews.reduce((prev, curr, index, arr) => {
                        return (
                            <div key={arr[this.state.number].id} className="review-text">
                                <h3>{arr[this.state.number].text}</h3>
                                <h3>{arr[this.state.number].auth}</h3>
                                <h5 className="selected">{arr[this.state.number].spec}</h5>
                            </div>
                        )
                    })}
                </div>
                <div className="reviews-btn-block text-center">
                    <button onClick={this.prevReview} className="review-btn selected"><i className="fas fa-arrow-left fa-2x"></i></button>
                    <button onClick={this.nextReview} className="review-btn selected"><i className="fas fa-arrow-right fa-2x"></i></button>
                </div>
            </div>
        );
    }
}

export default Reviews;