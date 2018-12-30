import React, { Component } from 'react';
import ListForm from './ListForms';

class LastForms extends Component {
    
    state = {
        activeItem: 'Wszystkie',
        forms: this.props.forms,
        items: ['Wszystkie', 'Prawne i sądowe', 'Rekrutacja i zatrudnienie', 'Firmowe', 'Sprawy obywatelskie', 'Nieruchomości', 'Transport i pojazdy', 'Finanse', 'Inne']
    }
    
    findForm = (item) => {
        if (item === 'Wszystkie') {
            this.setState({forms: this.props.forms, activeItem: item});
        } else {
            this.setState({activeItem: item, forms: this.props.forms.filter(form => {
                return form.type === item;
            })});
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="block-last-form">
                    <h2 className="text-center">Najnowsze formularze</h2>
                        <div className="form-btns-filters">
                            {this.state.items.map(item => {
                                return (
                                    <button className={this.state.activeItem === item ? 'btn btn-primary' : 'btn btn-link'} key={item} onClick={() => this.findForm(item)}>{item}</button>
                                )
                            })}
                        </div>
                    <ListForm forms={this.state.forms} />
                </div>
            </div>
        );
    }

}

export default LastForms;