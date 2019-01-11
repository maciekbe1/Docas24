import React, { Component } from 'react';
import '../../styles/forms.css'
import departmentImage from "../../images/tag-shape.png";
import clockImage from "../../images/clock.png";
import stockImage from "../../images/stock.png";
import userImage from "../../images/user-silhouette.png";
import docImage from '../../images/file.png';
import Pagination from './Pagination'

class FilteredForms extends Component {
    state = {
        f: this.props.f,
        l: this.props.l,
        num: 0
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.f !== this.state.f || nextProps.l !== this.state.l ) {
        this.setState({ f: nextProps.f, l: nextProps.l });
      }
    }
    filteredFormPagination = () => {
        const { filtered } = this.props    
        if (filtered.length > 5) {
            return <Pagination 
                        firstPage={this.handlerFirst} 
                        lastPage={this.handlerLast}
                        coutPage={Math.ceil(this.props.filtered.length / 5)}
                        pager={this.handlerPages}
                        num={this.state.num}
                    />
        }
    }
    handlerFirst = () => {
        this.setState({f: 0, l: 5})
    }
    handlerLast = () => {
        const { filtered } = this.props
        this.setState({f: filtered.length - (filtered.length % 5), l: filtered.length})
    }
    handlerPages = (event) => {
        this.setState({
            f: (Number(event.target.textContent) * 5) - 5, 
            l: Number(event.target.textContent) * 5,
            num: Number(event.target.textContent)
        })
    }
    render() {
        const { filtered } = this.props
        return (
            <React.Fragment>
            {filtered.slice(this.state.f, this.state.l).map(form => {
                return (
                    <div className="filtered-form-component" key={form.id} >
                        <div className="d-flex filtered-form">
                            <div className="filtered-form-image-container">
                                <img alt={form.name + form.id} src={docImage} className="filtered-form-image"/>
                            </div>
                            <div className="form-details d-flex flex-column justify-content-between">
                                <h3 className="filtered-form-header">{form.name}</h3>
                                <p className="filtered-form-description">{form.description}</p>
                                <div className="row no-gutters justify-content-between">
                                    <div className="d-flex">
                                        <img alt="department" className="" src={departmentImage}/>
                                        <p>{form.department}</p>
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
            { this.filteredFormPagination(this) }
            </React.Fragment>
        );
    }

}

export default FilteredForms;