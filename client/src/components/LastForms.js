import React, { Component } from 'react';
import ListForm from './ListForms';

class LastForms extends Component {
    
    state = {
        forms: this.props.forms
    }
    
    findAllForms = () => {
        this.setState({forms: this.props.forms});
    }
    findForm = name => {
        this.setState({forms: this.props.forms.filter(form => {
            return form.class === name;
        })});
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="block-last-form">
                    <h2 className="text-center">Najnowsze formularze</h2>
                        <div className="form-btns-filters">
                            <button onClick={this.findAllForms} className="btn btn-link">Wszystkie</button>
                            <button onClick={this.findForm.bind(this, 'us')} className="btn btn-link">Urząd skarbowy</button>
                            <button onClick={this.findForm.bind(this, 'zus')} className="btn btn-link">Zus</button>
                            <button onClick={this.findForm.bind(this, 'bank')} className="btn btn-link">Bank</button>
                            <button onClick={this.findForm.bind(this, 'dg')} className="btn btn-link">Działaność gospodarcza</button>
                            <button onClick={this.findForm.bind(this, 'other')} className="btn btn-link">inne</button>
                        </div>
                    <ListForm forms={this.state.forms} />
                </div>
            </div>
        );
    }

}

export default LastForms;