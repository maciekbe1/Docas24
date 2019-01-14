import React from 'react';

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
        };
    }
    onChecked = () => {
        var currentState = this.state.check;
        this.setState({check: !currentState});
    }
    onHandleClick = () => {
        this.onChecked();
        this.props.action();
    }
    render() {
        return (
            <div className="form-checkbox-btn">
                <span>
                    <i className={this.state.check ? "fas fa-check-circle fa-2x" : "far fa-circle fa-2x"} onClick={this.onHandleClick}></i>
                    <p>{this.props.text}</p>
                    <input type="checkbox" />
                </span>
            </div>
        );
    }
}

export default RadioButton;