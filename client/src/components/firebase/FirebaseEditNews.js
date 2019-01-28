import React from 'react';
import firebase from "firebase";
import FileBase64 from 'react-file-base64';


class FirebaseEditNews extends React.Component {
    state = {
        title: '',
        text: '',
        img: '',
        id: '',
        isRequred: false,
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.document.title !== this.props.document.title) {
            this.setState({
                title: nextProps.document.title,
                text: nextProps.document.text,
                img: [nextProps.document.img[0], nextProps.document.img[1]],
                id: nextProps.id
            })
        }
    }

    onTitleHandle = (e) => {
        this.setState({title: e.target.value})
    }

    onTextHandle = (e) => {
        this.setState({text: e.target.value})
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

    getFiles(files){
        const arr = []
        files.map((file,i) => {
            return arr.push(file.name, file.base64)
        })
        this.setState({ img: arr })
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
                                <input onChange={this.onTitleHandle} value={this.state.title} name="title" />

                                <label htmlFor="text">Tekst:</label>
                                <textarea onChange={this.onTextHandle} value={this.state.text} name="text" />

                                <label htmlFor="img">Zdjęcie:</label>
                                <FileBase64 multiple={ true } onDone={ this.getFiles.bind(this) } />
                                <div className="text-center">
                                    <img alt="img" src={this.state.img[1]} />
                                </div>

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