import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBqCMYCXyQECaqNEYgElgtTOv2K8WtDaCo",
    authDomain: "docas24-69429.firebaseapp.com",
    databaseURL: "https://docas24-69429.firebaseio.com",
    projectId: "docas24-69429",
    storageBucket: "docas24-69429.appspot.com",
    messagingSenderId: "831684098973"
};

!firebase.apps.length && firebase.initializeApp(config);

const newsEnvironment = window.location.hostname === 'localhost' ? 'news-dev' : 'news'

export {config, newsEnvironment};
