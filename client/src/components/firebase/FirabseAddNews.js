import React from 'react';
import firebase from 'firebase';

class FirebaseAddNews extends React.Component {
    state = {
        title: '',
        text: '',
        img: '',
        isRequred: false,
    }

    onTitleHandler = (e) => {
        this.setState({title: e.target.value})
    }

    onTextHandler = (e) => {
        this.setState({text: e.target.value})
    }

    onImgHandler = (e) => {
        this.setState({img: e.target.value})
    }

    onArticleHandler = () => {
        const db = firebase.firestore();
        if (this.state.title && this.state.text) {
            db.collection("news").add({
                title: this.state.title,
                text: this.state.text,
                img: this.state.img,
                date: firebase.firestore.FieldValue.serverTimestamp()
            });

            document.querySelector('.close-add-article').click();
        } else {
            this.setState({isRequred: true})
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="firebase-add-btn" data-toggle="modal" data-target="#firebaseAddArticle">
                <i className="far fa-plus-square fa-5x"></i>
                </div>

                <div className="modal fade firebase-modal-add-article" id="firebaseAddArticle" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="firebaseAddArticleLabel">Dodaj nowy post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="title">Tytuł:</label>
                                <input onChange={this.onTitleHandler} name="title" required />
                                <label htmlFor="text">Tekst:</label>
                                <textarea onChange={this.onTextHandler} name="text" required />
                                <label htmlFor="img">Zdjęcie:</label>
                                <input onChange={this.onImgHandler} name="img" required />
                                <p className={this.state.isRequred ? 'text-danger' : 'text-danger d-none'}>Proszę uzupełnic wszystkie pola</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary close-add-article" data-dismiss="modal">Zamknij</button>
                                <button type="button" className="btn btn-primary" onClick={this.onArticleHandler}>Zapisz</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FirebaseAddNews;