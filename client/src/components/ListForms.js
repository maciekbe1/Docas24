import React, { Component } from 'react';

class ListForm extends Component {

    render() {
        return (
            <section className='form-filter'>
                    {this.props.forms.map(form => {
                     return (
                        <div className={form.class} key={form.id}>
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
            </section>
        );
    }

}

export default ListForm;