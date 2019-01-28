import React from 'react';
import firebase from "firebase";
import FirebaseAddNews from './FirabseAddNews';
import FirebaseDeleteNews from './FirebaseDeleteNews';
import FirebaseEditNews from './FirebaseEditNews';

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
        db.collection('news')
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
        db.collection('news').onSnapshot(querySnapshot => {
            this.onUpdateNews()
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }

    onElemDetailsHandle = (e) => {
        this.setState({
            id: e.target.parentNode.parentNode.id
        })
        const db = firebase.firestore();
        db.collection('news')
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

    render() {

        if (this.state.isLoading) {
            return (
                <p>Ładowanie</p>
            )
        } else {
            return(
                <div>
                    <FirebaseAddNews />
                    {this.state.documents.map(doc => {
                        return (
                            <div className="firebase-article" key={doc.id}>
                                <div  id={doc.id} className="firebase-btns">
                                    <span onClick={this.onElemDetailsHandle} className="firebase-edit-btn firebase-edit-btn" data-toggle="modal" data-target="#firebaseEditArticle"><i className="far fa-edit fa-3x"></i></span>
                                    <span onClick={this.onElemDetailsHandle} className="firebase-delete-btn" data-toggle="modal" data-target="#firebaseDeleteArticle"><i className="far fa-trash-alt fa-3x"></i></span>
                                </div>
                                <div className="article-details">
                                    <span>Tytuł:</span>
                                    <div className="adminNewsTitle">{doc.data().title}</div>

                                    <span>Tekst:</span>
                                    <div className="adminNewsText">{doc.data().text}</div>

                                    <span>Zdjęcie:</span>
                                    <div className="adminNewsImg"><img alt="news-img" src={doc.data().img[1]} /></div>
                                </div>
                            </div>
                        )
                    })}
                    <FirebaseEditNews document={this.state.document} id={this.state.id} />
                    <FirebaseDeleteNews element={this.state.element} id={this.state.id} />
                </div>
            )
        }
    }
}




export default FirebaseNews;