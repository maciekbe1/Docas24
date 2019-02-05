import React from 'react';
import firebase from "firebase";

class FirebaseForms extends React.Component {
    state = {
        documents : [],
        isLoading: true
    }

    componentWillMount() {
        const db = firebase.firestore();
        db.collection('forms').get().then((snapshot) => {
            let documents = [];
            snapshot.docs.forEach(doc => {
                let items = doc;
                documents.push(items)
            });

          this.setState({
              documents : documents ,
              isLoading: false
            })
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
                    <div className="firebase-add-btn"></div>
                    {this.state.documents.map(doc => {
                        return (
                            <div className="form" id={doc.id}>
                                <div className="firebase-btns">
                                    <span className="firebase-delete-btn">delete</span>
                                    <span className="firebase-edit-btn">edit</span>
                                </div>
                                <div className="form-details">
                                    <div className="name">Tytuł: {doc.data().name}</div>
                                    <div className="category">Kategoria: {doc.data().category}</div>
                                    <div className="link">{doc.data().link}</div>
                                    <div className="department">{doc.data().department}</div>
                                    <div className="year">{doc.data().year}</div>
                                    <div className="type">{doc.data().type}</div>
                                    <div className="description">{doc.data().description}</div>
                                    <div className="tags">{doc.data().tags}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default FirebaseForms;