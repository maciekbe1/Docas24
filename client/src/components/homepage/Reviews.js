import React, { Component } from 'react';
import TinySlider from "tiny-slider-react";

class Reviews extends Component {
    state = {
        reviews: this.props.reviews
    }

    onGoTo = dir => this.ts.slider.goTo(dir)

    render() {
        const settings = {
            lazyload: true,
            nav: false,
            mouseDrag: true,
            gutter: 0,
            controls: false,
            responsive: {
                420: {
                  items: 3,
                }
              }
          };
        return (
            <div className="container-fluid block-reviews">
                <h2 className="text-center">Opinie naszych klientów</h2>
                <TinySlider settings={settings} ref={ts => this.ts = ts}>
                    {this.state.reviews.map((review) => {
                        return (
                            <div key={review.id} className="review-text">
                                <h3>{review.auth}</h3>
                                <h5 className="selected">{review.spec}</h5>
                                <h3>{review.text}</h3>
                            </div>
                        )
                    })}
                </TinySlider>
                <div className="reviews-btn-block text-center">
                    <button onClick={() => this.onGoTo('prev')} className="review-btn selected"><i className="fas fa-arrow-left fa-2x"></i></button>
                    <button onClick={() =>  this.onGoTo('next')} className="review-btn selected"><i className="fas fa-arrow-right fa-2x"></i></button>
                </div>
            </div>
        );
    }
}

export default Reviews;