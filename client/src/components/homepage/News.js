import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class News extends Component {
    render() {
        const { news } = this.props
        return (
            <div className="container-fluid news">
                <h2>Aktualności</h2>
                <div className="row">
                    {news.map(article => {
                        return (
                            <div className="news-content" key={article.id}>
                                <div className="news-square d-flex justify-content-center align-items-center">
                                    <img alt="news" src={article.data().img[1]} />
                                </div>
                                <div className="news-text">
                                    <h3>{article.data().title}</h3>
                                    <p>{article.data().text.split(" ").join(" ").slice(0, 200)}...</p>
                                </div>
                                <Link to={`/news/${article.id}`} className="btn btn-outline-primary read-more-article">Przeczytaj</Link>
                            </div>
                        )
                    })}
                </div>
                <div className="docas-show-more col-12">
                    <Link to="/news" className="d-inline-block btn btn-primary docas-show-more-button">Pokaż więcej</Link>
                </div>
            </div>
        );
    }

}

export default News;