import React, { Component } from 'react';
import '../../styles/forms.css'
import departmentImage from "../../images/tag-shape.png";
import clockImage from "../../images/clock.png";
import stockImage from "../../images/stock.png";
import userImage from "../../images/user-silhouette.png";



class FilteredForms extends Component {

    render() {
        return (
            <React.Fragment>
            {this.props.filtered.map(form => {
                return (
                    <div className="filtered-form-component" key={form.id} >
                        <div className="d-flex filtered-form">
                            <div className="filtered-form-image-container">
                                <img alt={form.name + form.id} src={form.image} className="filtered-form-image"/>
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
                                        <img alt="department" className="" src={clockImage}/>
                                        <p>{form.year}</p>
                                    </div>
                                    <div className="d-flex">
                                        <img alt="department" className="" src={stockImage}/>
                                        <p>{form.type}</p>
                                    </div>
                                    <div className="d-flex">
                                        <img alt="department" className="" src={userImage}/>
                                        <p>{form.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn docas-btn-outline-primary">ZAPISZ</button>
                            <button className="btn docas-btn-outline-primary">ocena gwiazdki</button>
                            <button className="btn btn-primary docas-btn-primary">WYPEŁNIJ</button>
                        </div>
                    </div>
                )
            })}
            </React.Fragment>
        );
    }

}

export default FilteredForms;