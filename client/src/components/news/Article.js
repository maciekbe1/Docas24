import React, { Component } from 'react';
import { FacebookProvider, Comments, Like } from 'react-facebook';
import firebase from "firebase";

class Article extends Component {
    state = {
        news: {}
    }
    
    componentDidMount(){
        
        const db = firebase.firestore();
        db.collection('news').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if (doc.id === this.props.match.params.id) {
                    console.log(doc.id);
                    this.setState({news: doc.data()});
                }
            });
        });
        // console.log(window.location.href);
        // const db = firebase.firestore();
        // db.collection('news').get().then((snapshot) => {
        // 
        //     snapshot.docs.forEach(doc => {
        //         if (doc.id === this.props.match.params.id ) {
        //             this.setState({news: doc.data()})
        //             console.log(doc.data().img);
        //         }
        // 
        //     });
        // });
    }
    // componentWillMount() {
    //     const db = firebase.firestore();
    //     db.collection('news')
    //     .get().then((snapshot) => {
    //         let documents = [];
    //         snapshot.docs.forEach(doc => {
    //             let items = doc;
    //             documents.push(items)
    //         });
    // 
    //       this.setState({
    //           news : documents
    //         })
    //     });
    // }
    render() {
        // console.log(this.props.match.params.id);
        // const abc = (element, index, array) => {
        //     return element.id === this.props.match.params.id
        // }
        // console.log(this.state.news.every(abc));
        // const db = firebase.firestore();
        // db.collection('news').get().then((snapshot) => {
        // 
        //     snapshot.docs.forEach(doc => {
        //         if (doc.id === this.props.match.params.id ) {
        //             this.setState({news: doc.data()})
        //             console.log(doc.data().img);
        //         }
        // 
        //     });
        // });
        
        return (
            <div>
                {
                    this.state.news.img ? 
                    <img alt="news" src={require(`../../images/${this.state.news.img}`)} />
                    : null
                }
                <h2 className="text-center">{this.state.news.title}</h2>
                <div>{this.state.news.text}</div>
                {
                    // this.state.news ? 
                    //     <div class="fb-comments" data-href={window.location.href} data-numposts="5"></div>
                    // : null
                    //<div className="fb-comments" data-href={window.location.href} data-numposts="5"></div>
                    

                }
                <FacebookProvider appId="334768987246948">
                  <Comments href={window.location.href} />
                  <Like href={window.location.href} colorScheme="dark" showFaces share />
                </FacebookProvider>
            </div>
        );
    }

}
// const Article = ({isAuthed, match, location}) => {
//     // console.log(isAuthed);
//     // console.log(this.props.location.state);
// 
//     return (
//         <div>
//             <h1>Hello {match.params.id}!</h1>
// 
// 
//         </div>
//     )
// }

export default Article;