import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Pagination from 'react-paginating';
import Article from '../news/Article';

import firebase from "firebase";
import '../../styles/news.css'
import {newsEnvironment} from '../firebase/config';

class NewsPage extends Component {
    state = {
        news : [],
        currentPage: 1,
        newsLength: 0
    }
    componentWillMount() {
        const db = firebase.firestore();
        db.collection(newsEnvironment)
        .orderBy('date', 'desc')
        .get().then((snapshot) => {
            let documents = [];
            snapshot.docs.forEach(doc => {
                let items = doc;
                documents.push(items)
            });

          this.setState({
              news : documents,
              newsLength: documents.length - 2
            })
        });
    }
    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });
    };
    articleSelectedHandler = (id) => {
        this.props.history.push( `/news/${id.id}` );
    }
    onChangeText = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent.slice(0, 200) || tmp.innerText.slice(0, 200);
    }
    artilcesRender = () => {
        if (this.props.history.location.pathname === '/news') {
            return (
                <div className="articles-header-container">
                    <h2 className="text-center">Aktualności</h2>
                    <div className="articles-header">
                        <h4 className="badge badge-primary">Najnowsze</h4>

                            <div className="row header-latest">
                                {
                                    this.state.news.slice(0, 2).map((latest, index) => {
                                        return (
                                            <div key={index} className="col-md-6">
                                                <div className="latest-square">
                                                    <img className="latest-image" alt="news" src={latest.data().img[1]} />
                                                    <div className="latest-title">
                                                        <h3> {latest.data().title}</h3>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{this.onChangeText(latest.data().text)}...</p>
                                                </div>
                                                <div className="d-flex justify-content-end header-read-more">
                                                    <Link to={`${this.props.match.url}/${latest.id}`} className="btn btn-outline-primary read-more-article">Przeczytaj</Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        const limit = 2;
        const displayNews = 5;
        const pageCount = 3;
        const total = Math.ceil(this.state.newsLength * limit / displayNews);
        const { currentPage } = this.state;
        return (
            <div className="container articles">
            {this.artilcesRender()}

                    {
                        this.props.history.location.pathname === '/news' ?
                        this.state.news.slice(2+(currentPage - 1)*displayNews, 2+(currentPage*displayNews)).map((article, index) => {
                            return (
                                <div className="row articles-row" key={index}>

                                    <div className="col-md-4 articles-image d-flex justify-content-center align-items-center">
                                        <img alt="news" src={article.data().img[1]} />
                                    </div>

                                    <div className="col-md-8 article-text">
                                        <h3>{article.data().title}</h3>
                                        <p>{this.onChangeText(article.data().text)}...</p>
                                        <div className="d-flex justify-content-end">
                                            <Link to={`${this.props.match.url}/${article.id}`} className="btn btn-outline-primary read-more-article" onClick={() => this.articleSelectedHandler(article)}>Przeczytaj</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    ) : null
                }
                {
                    this.props.history.location.pathname === '/news' ?
                    <div className={this.state.newsLength  <= displayNews ? "d-none" : "pag-container"}>
                        <Pagination
                            total={total}
                            limit={limit}
                            pageCount={pageCount}
                            currentPage={currentPage}
                        >
                          {({
                            pages,
                            currentPage,
                            hasNextPage,
                            hasPreviousPage,
                            previousPage,
                            nextPage,
                            totalPages,
                            getPageItemProps
                          }) => (
                            <ul className="pagination">
                                <li className="page-link"
                                    {...getPageItemProps({
                                        pageValue: 1,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                Pierwsza
                              </li>

                              {hasPreviousPage && (
                                <li className="page-link page-link-style" aria-label="Previous"
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                                </li>
                              )}

                              {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                  activePage = { backgroundColor: "#0b51ca", color: "#fff" };
                                }
                                return (
                                  <li className="page-link page-link-style"
                                    {...getPageItemProps({
                                      pageValue: page,
                                      key: page,
                                      style: activePage,
                                      onPageChange: this.handlePageChange
                                    })}
                                  >
                                    {page}
                                  </li>
                                );
                              })}

                              {hasNextPage && (
                                <li className="page-link page-link-style" aria-label="Next"
                                  {...getPageItemProps({
                                    pageValue: nextPage,
                                    onPageChange: this.handlePageChange
                                  })}
                                >
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                                </li>
                              )}

                              <li className="page-link"
                                {...getPageItemProps({
                                  pageValue: totalPages,
                                  onPageChange: this.handlePageChange
                                })}
                              >
                                Ostatnia
                              </li>
                            </ul>
                          )}
                        </Pagination>
                    </div>
                        : null
                }

                <Route path={this.props.match.url + '/:id'} component={Article} />
            </div>
        );
    }

}

export default NewsPage;