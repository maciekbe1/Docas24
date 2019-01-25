import React from 'react';
import firebase from "firebase";

class FirebaseEditNews extends React.Component {
    state = {
        title: '',
        text: '',
        img: '',
        id: '',
        isRequred: false,
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.state.title !== this.props.state.title) {
            this.setState({
                title: nextProps.state.title,
                text: nextProps.state.text,
                img: nextProps.state.img,
                id: nextProps.state.id
            })
        }
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

    onEditArticleHandle = () => {
        const db = firebase.firestore();
        db.collection('news')
            .doc(this.state.id)
            .update({
                title: this.state.title,
                text: this.state.text,
                img: this.state.img,
            });
        document.querySelector('.close-edit-article').click();

    }

    render() {
        return (
            <React.Fragment>
                <div className="modal fade firebase-modal-add-article" id="firebaseEditArticle" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="firebaseEditArticleLabel">Edytuj post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="title">Tytuł:</label>
                                <input onChange={e => this.onTitleHandler(e)} value={this.state.title} name="title" />

                                <label htmlFor="text">Tekst:</label>
                                <textarea onChange={this.onTextHandler} value={this.state.text} name="text" />

                                <label htmlFor="img">Zdjęcie:</label>
                                <input onChange={this.onImgHandler} value={this.state.img} name="img" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary close-edit-article" data-dismiss="modal">Zamknij</button>
                                <button type="button" className="btn btn-primary" onClick={this.onEditArticleHandle}>Zapisz</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FirebaseEditNews;