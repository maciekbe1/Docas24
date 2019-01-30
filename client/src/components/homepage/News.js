import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    onChangeText = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent.slice(0, 200) || tmp.innerText.slice(0, 200);
    }

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
                                    <h3 className="px-3">{article.data().title}</h3>
                                  <p className="text-justify px-3">{this.onChangeText(article.data().text)}...</p>
                                   
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link to={`/news/${article.id}`} className="btn btn-outline-primary read-more-article">Przeczytaj</Link>
                                </div>
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