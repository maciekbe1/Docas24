import React from 'react';
import firebase from "firebase";
import forms from "../../data/forms.json";

class AdminPanel extends React.Component {
    state = {
        login: ''
    }

    componentWillMount() {
        const email = this.props.login;
        const login = email.substring(0, email.indexOf('@'))
        this.setState({login})

        const db = firebase.firestore();
        db.settings({
            // timestampsInSnapshots: true
        });


        // odczytywanie z bazy danych !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        // const docRef = db.collection('forms').get()
        // .then(snapshot => {
        //   if (snapshot.empty) {
        //     console.log('No matching documents.');
        //     return;
        //   }
        //   snapshot.forEach(doc => {
        //     console.log(doc.id, '=>', doc.data());
        //   });
        // })
        // .catch(err => {
        //   console.log('Error getting documents', err);
        // });



        // dodawanie do bazy wpisow !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! nie usuwac

        // forms.forEach(form => {
        //     // console.log(form.tags)
        //         const userRef = db.collection("forms").add({
        //     id: form.id,
        //     name: form.name,
        //     category: form.category,
        //     link: form.link,
        //     image: form.image,
        //     department: form.department,
        //     year: form.year,
        //     type: form.type,
        //     description: form.description,
        //     tags: form.tags
        //   });
        // })

    }


    userLogout = () => {
        firebase.auth().signOut().then(function() {
            console.log('Wylogowano')
          }).catch(function(error) {
            console.log(error)
          });
    }

    readUserData() {
        firebase.database().ref('Users/').once('value', function (snapshot) {
            console.log(snapshot.val())
        });
    }

    render() {
        return (
            <div className="container-fluid admin-panel">
                <div className="row">
                    <div className="logged-as">
                        <span>
                            Zalogowano jako: <b>{this.state.login}</b>
                        </span>
                        <button onClick={this.userLogout} className="btn docas-btn-primary login-btn">wyloguj</button>
                    </div>
                    <div className="row add-content">
                        <div className="col-md-3 offset-md-1 content-menu">
                            <div className="list-group" id="list-tab" role="tablist">
                                <a className="list-group-item list-group-item-action active" id="list-forms-list" data-toggle="list" href="#list-forms" role="tab" aria-controls="forms">Formularze</a>
                                <a className="list-group-item list-group-item-action" id="list-news-list" data-toggle="list" href="#list-news" role="tab" aria-controls="news">Aktualności</a>
                            </div>
                        </div>
                        <div className="col-md-7 content">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-forms" role="tabpanel" aria-labelledby="list-forms-list">
                                1
                                </div>
                                <div className="tab-pane fade" id="list-news" role="tabpanel" aria-labelledby="list-news-list">
                                2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPanel;