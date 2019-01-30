import React, { Component } from 'react';
import { FacebookProvider, Comments, Like } from 'react-facebook';
import firebase from "firebase";
import {newsEnvironment} from '../firebase/config';
import ReactHtmlParser from 'react-html-parser';

class Article extends Component {
    state = {
        news: {}
    }

    componentDidMount(){
        const db = firebase.firestore();
        db.collection(newsEnvironment).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if (doc.id === this.props.match.params.id) {
                    this.setState({news: doc.data()});
                }
            });
        });

    }
    goBack = () => {
        window.history.back();
    }
    render() {
        return (
            <div className="article">
                <h2 className="text-center article-title">{this.state.news.title}</h2>
                <div className="article-image float-left">
                {
                    this.state.news.img ?
                    <img alt="news" src={this.state.news.img[1]} />
                    : null
                }
                </div>
                <div className="article-text">
                    {ReactHtmlParser(this.state.news.text)}
                </div>
                <div className="socials">
                    <FacebookProvider appId="334768987246948">
                      <Comments width={"100%"} href={window.location.href} />
                      <Like size={"large"} href={window.location.href} colorScheme="dark" showFaces share/>
                      <button className="btn docas-btn-primary d-block margin-inline-start" onClick={this.goBack}>Powrót</button>
                    </FacebookProvider>
                </div>
            </div>
        );
    }

}

export default Article;