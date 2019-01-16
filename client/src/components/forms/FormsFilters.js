import React, { Component } from 'react';

class Formsfilters extends Component {
    changeOption = (type, e) => {
        var val = e.target.value;
        this.props.changeOption(val, type);
      }
    render() {
        return (
            <div className="filter-options">
                <div className="filter-option">
                    <div className={this.props.departmentOptions.length > 1 ? "filter" : "d-none"}>
                        <label>Urząd</label>
                        <select id="Department" onChange={this.changeOption.bind(this, 'department')}>
                            {this.props.departmentOptions.map( (department, index) => {
                                return <option key={index}>{department}</option>
                            })}
                        </select>
                    </div>
                    <div className={this.props.typeOptions.length > 1 ? "filter" : "d-none"}>
                        <label>Rodzaj dokumentu</label>
                        <select id="Type" onChange={this.changeOption.bind(this, 'type')}>
                            {this.props.typeOptions.map( (type, index) => {
                                return <option key={index}>{type}</option>
                            })}
                        </select>
                    </div>

                    <div className={this.props.categoryOptions.length > 1 ? "filter" : "d-none"}>
                        <label>Kategoria sprawy</label>
                        <select id="Category" onChange={this.changeOption.bind(this, 'category')}>
                            {this.props.categoryOptions.map( (category, index) => {
                            return <option key={index}>{category}</option>
                            })}
                        </select>
                    </div>

                    <div className={this.props.yearOptions.length > 1 ? "filter" : "d-none"}>
                        <label>Rok</label>
                        <select id="Year" onChange={this.changeOption.bind(this, 'year')}>
                            {this.props.yearOptions.map( (year, index) => {
                                return <option key={index}>{year}</option>
                            })}
                        </select>
                    </div>

                </div>
            </div>
        );
    }

}

export default Formsfilters;