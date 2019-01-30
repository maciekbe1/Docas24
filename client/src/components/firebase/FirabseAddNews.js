import React from 'react';
import firebase from 'firebase';
import ReactQuill from 'react-quill';
import FileBase64 from 'react-file-base64';
import {newsEnvironment} from '../firebase/config';

class FirebaseAddNews extends React.Component {
    state = {
        title: '',
        text: '',
        img: '',
        isRequred: false,
        files: []
    }

    modules = {
        toolbar: [
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link'],
          ['clean']
        ],
      }

      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link',
      ]

    onTitleHandle = (e) => {
        this.setState({title: e.target.value})
    }

    onTextHandle = (e) => {
        this.setState({text: e.target.value})
    }

    getFiles(files){
        const arr = []
        files.map((file,i) => {
            return arr.push(file.name, file.base64)
        })
        this.setState({ img: arr })
      }

    onArticleHandle = () => {
        const db = firebase.firestore();
        if (this.state.title && this.state.text && this.state.img) {
            db.collection(newsEnvironment).add({
                date: firebase.firestore.FieldValue.serverTimestamp(),
                title: this.state.title,
                text: this.state.text,
                img: this.state.img
            });

            document.querySelector('.close-add-article').click();
        } else {
            this.setState({isRequred: true})
        }
    }

    handleChange(value) {
        this.setState({ text: value })
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
                                <input onChange={this.onTitleHandle} name="title" required />

                                <label htmlFor="text">Tekst:</label>
                                {/*<textarea onChange={this.onTextHandle} name="text" required />*/}

                                <ReactQuill value={this.state.text} onChange={this.handleChange.bind(this)} modules={this.modules} formats={this.formats}/>

                                <label htmlFor="img">Zdjęcie:</label>
                                <FileBase64 multiple={ true } onDone={ this.getFiles.bind(this) } />
                                <div className="text-center">
                                    {this.state.img ? <img className="mw-100" alt="img" src={this.state.img[1]} /> : null}
                                </div>

                                <p className={this.state.isRequred ? 'text-danger' : 'text-danger d-none'}>Proszę uzupełnic wszystkie pola</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary close-add-article" data-dismiss="modal">Zamknij</button>
                                <button type="button" className="btn btn-primary" onClick={this.onArticleHandle}>Zapisz</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FirebaseAddNews;