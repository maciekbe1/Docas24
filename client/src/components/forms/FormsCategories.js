import React, { Component } from 'react';

class FormsCategories extends Component {
    render() {
        return (
            <React.Fragment>
                <button type="button" className="categry-filter-button" onClick={this.props.action}>
                    {this.props.category}
                </button>
                <span className="badge badge-secondary">{this.props.count}</span>
            </React.Fragment>
        );
    }

}

export default FormsCategories;