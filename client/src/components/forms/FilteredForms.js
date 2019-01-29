import React, { Component } from 'react';
import '../../styles/forms.css'
import departmentImage from "../../images/tag-shape.png";
import clockImage from "../../images/clock.png";
import stockImage from "../../images/stock.png";
import userImage from "../../images/user-silhouette.png";
import formImage from '../../images/file.png'
import Pagination from 'react-paginating';


class FilteredForms extends Component {
    state = {
        currentPage: 1,
        formsLength: this.props.filtered.length,
        
    }
    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.filtered.length !== this.state.formsLength) {
            this.setState({formsLength: nextProps.filtered.length, currentPage: 1})
        }
    }
    render() {
        const tags = (el) => {
                return el.map((item, index) => {
                    return <li key={index}><p>#{item}</p></li>
                })
            }
        const limit = 2;
        const displayForms = 5;
        const pageCount = 3;
        const total = Math.ceil(this.state.formsLength * limit / displayForms);
        const { currentPage } = this.state;
        const { filtered } = this.props
        return (
            <React.Fragment>
            {
                this.state.formsLength !== 0 ?
                filtered.slice((currentPage - 1)*displayForms, currentPage*displayForms).map(form => {
                    return (
                        <div className="filtered-form-component" key={form.id} >
                            <div className="d-flex filtered-form">
                                <div className="filtered-form-image-container">
                                    <img alt={form.name + form.id} src={form.image === "" ? formImage : require(`../../images/forms_images/${form.image}`)} className="filtered-form-image"/>
                                </div>
                                <div className="form-details d-flex flex-column justify-content-between">
                                    <h3 className="filtered-form-header">{form.name}</h3>
                                    <p className="filtered-form-description">{form.description}</p>
                                    <div className="row no-gutters justify-content-between">
                                        <div className="d-flex tags">
                                            <img alt="department" className="" src={departmentImage}/>
                                            <ul className="d-flex flex-wrap">{tags(form.tags)}</ul>
                                        </div>
                                        <div className="d-flex">
                                            <img alt="year" className="" src={clockImage}/>
                                            <p>{form.year}</p>
                                        </div>
                                        <div className="d-flex">
                                            <img alt="type" className="" src={stockImage}/>
                                            <p>{form.type}</p>
                                        </div>
                                        <div className="d-flex">
                                            <img alt="category" className="" src={userImage}/>
                                            <p>{form.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <a rel="noopener noreferrer" target="_blank" href={form.link} className="d-flex justify-content-center align-items-center btn btn-primary docas-btn-primary">WYPEŁNIJ</a>
                            </div>
                        </div>
                    )
                }) : <div><h1 className="text-center">Brak wyników</h1></div>
            }
            <div className={this.state.formsLength  <= displayForms ? "d-none" : "pag-container"}>
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
            </React.Fragment>
        );
    }

}

export default FilteredForms;