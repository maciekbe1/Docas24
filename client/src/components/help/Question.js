import React, { Component } from 'react';

class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }
    onExpand = () => {
        var currentState = this.state.expanded
        this.setState({expanded: !currentState})
    }
    render() {
        return (
            <div className="accordion" id="accordionExample" key={this.props.id}>
                <div className="card">
                    <div className="card-header" id={"heading-" + this.props.id}>
                        <h2 className="mb-0">
                            <button className="btn btn-link" onClick={this.onExpand} type="button" data-toggle="collapse" data-target={"#collapse-" + this.props.id} aria-expanded="false" aria-controls={"collapse-" + this.props.id}>
                                <span>{this.props.title}</span>
                                <i className={this.state.expanded ? "fas fa-chevron-up fa-2x" : "fas fa-chevron-down fa-2x"}></i>
                            </button>
                        </h2>
                    </div>

                    <div id={"collapse-" + this.props.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            {this.props.text}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListForm;