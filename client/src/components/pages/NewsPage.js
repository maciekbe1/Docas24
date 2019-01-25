import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import { Route } from "react-router-dom";
import Article from '../news/Article';

import firebase from "firebase";
import '../../styles/news.css'

class NewsPage extends Component {
    state = {
        news : [],
        active: false
    }
    componentWillMount() {
        const db = firebase.firestore();
        db.collection('news')
        .orderBy('date', 'desc')
        .get().then((snapshot) => {
            let documents = [];
            snapshot.docs.forEach(doc => {
                let items = doc;
                documents.push(items)
            });

          this.setState({
              news : documents
            })
        });
    }
    articleSelectedHandler = (id) => {
        this.props.history.push( `/news/${id.id}` );
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Aktualności</h2>
                <div className="header-news">
                    <div className="header-news-page">
                    
                    </div>
                    <div className="fast-news-nav">
                        <ul>
                            
                        </ul>
                    </div>
                </div>
                <div className={""}>
                    {
                        this.props.history.location.pathname === '/news' ? 
                        this.state.news.map(article => {
                            return (
                                <div className="d-flex news-row" key={article.id}>
                                    <div className="news-image d-flex justify-content-center align-items-center">
                                        <img alt="news" src={require(`../../images/${article.data().img}`)} />
                                    </div>
                                    <div className="news-text">
                                        <h3>{article.data().title}</h3>
                                        <p>{article.data().text}</p>
                                        <div className="d-flex justify-content-end">
                                            <Link to={`${this.props.match.url}/${article.id}`} className="btn docas-btn-primary" onClick={() => this.articleSelectedHandler(article)}>Przejdź</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ) : null
                }
                </div>
                <Route path={this.props.match.url + '/:id'} component={Article} />
            </div>
        );
    }

}

export default NewsPage;