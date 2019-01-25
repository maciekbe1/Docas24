import React, { Component } from 'react';
import '../../styles/forms.css'
import departmentImage from "../../images/tag-shape.png";
import clockImage from "../../images/clock.png";
import stockImage from "../../images/stock.png";
import userImage from "../../images/user-silhouette.png";
import formImage from '../../images/file.png'
import Pagination from './Pagination'

class FilteredForms extends Component {
    state = {
        firstForm: this.props.firstForm,
        lastForm: this.props.lastForm,
        activePageNumber: this.props.activePageNumber,
        filteredLength: this.props.filtered.length
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.firstForm !== this.state.firstForm || nextProps.lastForm !== this.state.lastForm || nextProps.activePageNumber !== this.state.activePageNumber || nextProps.filtered.length !== this.state.filteredLength) {
        this.setState({ firstForm: nextProps.firstForm, lastForm: nextProps.lastForm, activePageNumber: nextProps.activePageNumber, filteredLength: nextProps.filtered.length });
      }
    }
    handlerFirst = () => {
        this.setState({firstForm: 0, lastForm: 5, activePageNumber: 1})
    }
    handlerLast = () => {
        this.setState({
            firstForm: this.state.filteredLength === 5 ? 0 : this.state.filteredLength - (this.state.filteredLength % 5), 
            lastForm: this.state.filteredLength,
            activePageNumber: Math.ceil(this.props.filtered.length / 5)
        })
    }
    handlerPages = (event) => {
        this.setState({
            firstForm: (Number(event.target.textContent) * 5) - 5, 
            lastForm: Number(event.target.textContent) * 5,
            activePageNumber: Number(event.target.textContent)
        })
    }
    render() {
        const tags = (el) => {
                return el.map((item, index) => {
                    return <li key={index}><p>#{item}</p></li>
                })
            }
        const { filtered } = this.props
        return (
            <React.Fragment>
            {filtered.slice(this.state.firstForm, this.state.lastForm).map(form => {
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
            })}
            <Pagination 
                        firstPage={this.handlerFirst} 
                        lastPage={this.handlerLast}
                        lengthPage={Math.ceil(this.props.filtered.length / 5)}
                        pager={this.handlerPages}
                        activePageNumber={this.state.activePageNumber}
                    />
            </React.Fragment>
        );
    }

}

export default FilteredForms;