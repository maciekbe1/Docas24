import React, { Component } from 'react';

class ListForm extends Component {
    
    render() {
        return (
            <section className='form-filter'>
                <div className="row">
                    {this.props.forms.map(form => {
                     return (
                        <div className={form.class + " col-md-4"} key={form.id}>
                            <div className="square">
                                <ul className="nav">
                                    <li className="nav-item">Zapisz</li>
                                    <li className="nav-item">Oceń</li>
                                    <li className="nav-item">Wypełnij</li>
                                </ul>
                            </div>
                            <p>{form.name}</p>
                        </div>
                     )
                    })}
                </div>
            </section>
        );
    }

}

export default ListForm;