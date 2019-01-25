import React from 'react';
import firebase from "firebase";

class FirebaseDeleteNews extends React.Component {

    onConfirmHandle = () => {
        const db = firebase.firestore();
        db.collection('news').doc(this.props.id).delete();
        document.querySelector('.close-delete-article').click();
    }

    render() {
        return(
            <div className="modal fade firebase-modal-delete-article" id="firebaseDeleteArticle" tabIndex="-1" role="dialog" aria-labelledby="firebaseDeleteArticle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Potwierdź usunięcie</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Czy jeteś pewny, że chcesz usunąć ten artykuł?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary close-delete-article" data-dismiss="modal">Anuluj</button>
                            <button type="button" className="btn btn-primary" onClick={this.onConfirmHandle}>Potwierdź</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirebaseDeleteNews;