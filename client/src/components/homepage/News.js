import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div className="container-fluid news">
                <h2>Aktualności</h2>
                <div className="row">
                    <div className="news-content col-lg-4">
                        <div className="news-square">
                        </div>
                        <div className="news-text">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis, numquam!</h3>
                            <p>A good content strategy can help engage your consumers and position your company as an effective publisher in your industry. In turn, this will play a role in increasing brand recognition, traffic to your website, lead conversions, and customer loyalty</p>
                        </div>
                    </div>
                    <div className="news-content col-lg-4">
                        <div className="news-square">
                        </div>
                        <div className="news-text">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis, numquam!</h3>
                            <p>A good content strategy can help engage your consumers and position your company as an effective publisher in your industry. In turn, this will play a role in increasing brand recognition, traffic to your website, lead conversions, and customer loyalty</p>
                        </div>
                    </div>
                    <div className="news-content col-lg-4">
                        <div className="news-square">
                        </div>
                        <div className="news-text">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facilis, numquam!</h3>
                            <p>A good content strategy can help engage your consumers and position your company as an effective publisher in your industry. In turn, this will play a role in increasing brand recognition, traffic to your website, lead conversions, and customer loyalty</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default News;