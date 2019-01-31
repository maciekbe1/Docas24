import React from 'react';
import firebase from "firebase";
import FirebaseAddNews from './FirabseAddNews';
import FirebaseDeleteNews from './FirebaseDeleteNews';
import FirebaseEditNews from './FirebaseEditNews';
import {newsEnvironment} from '../firebase/config';
import ReactHtmlParser from 'react-html-parser';

class FirebaseNews extends React.Component {
    state = {
        documents : [],
        isLoading: true,
        element: '',
        id: '',
        document: ''
    }

    componentWillMount() {
        this.onUpdateNews()
        this.onCheckNews()
    }

    onUpdateNews = () => {
        const db = firebase.firestore();
        db.collection(newsEnvironment)
        .orderBy('date', 'desc')
        .get().then((snapshot) => {
            let documents = [];
            snapshot.docs.forEach(doc => {
                let items = doc;
                documents.push(items)
            });

          this.setState({
              documents : documents,
              isLoading: false
            })
        });
    }

    onCheckNews = () => {
        const db = firebase.firestore();
        db.collection(newsEnvironment).onSnapshot(querySnapshot => {
            setTimeout(() => { this.onUpdateNews() }, 2000);
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }

    onElemDetailsHandle = (e) => {
        this.setState({
            id: e.target.parentNode.parentNode.id
        })
        const db = firebase.firestore();
        db.collection(newsEnvironment)
        .doc(e.target.parentNode.parentNode.id)
        .get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
              this.setState({
                  document: doc.data()
                })
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });
    }

    onTimeDetailsHandle = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const year = date.getFullYear();
        const month = date.getMonth() + 1 ;
        const day = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();

        var formatDate =  `${day}/${month < 10 ? "0" + month : month}/${year} - ${hour}:${minutes}`
        return formatDate
    }

    render() {
        if (this.state.isLoading) {
            return (
                <p>Ładowanie</p>
            )
        } else {
            return(
                <div className="firebaseNews">
                    <FirebaseAddNews />
                    <div id="accordion">
                        {this.state.documents.map((doc, index) => {
                            return (
                                <div className="card"  key={index}>
                                    <div className="card-header" id={`heading${index}`}>
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                            <h5 className="mb-0 text-left">{doc.data().title}</h5>
                                        </button>
                                        <span className="float-right">{this.onTimeDetailsHandle(doc.data().date.seconds)}</span>
                                    </div>
                                    <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordion">
                                        <div className="card-body">
                                            <div className="firebase-article" key={doc.id}>
                                                <div  id={doc.id} className="firebase-btns">
                                                    <span onClick={this.onElemDetailsHandle} className="firebase-edit-btn firebase-edit-btn" data-toggle="modal" data-target="#firebaseEditArticle"><i className="far fa-edit fa-3x"></i></span>
                                                    <span onClick={this.onElemDetailsHandle} className="firebase-delete-btn" data-toggle="modal" data-target="#firebaseDeleteArticle"><i className="far fa-trash-alt fa-3x"></i></span>
                                                </div>
                                                <div className="article-details">
                                                    <span>Tytuł:</span>
                                                    <p className="adminNewsTitle">{doc.data().title}</p>

                                                    <span>Podgląd:</span>
                                                    <div className="article-details-preview">
                                                        <div className="adminNewsImg article-image float-left"><img alt="news-img" src={doc.data().img[1]} /></div>
                                                        <div className="adminNewsText">{ReactHtmlParser(doc.data().text)}</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <FirebaseEditNews document={this.state.document} id={this.state.id} />
                    <FirebaseDeleteNews element={this.state.element} id={this.state.id} />
                </div>
            )
        }
    }
}




export default FirebaseNews;