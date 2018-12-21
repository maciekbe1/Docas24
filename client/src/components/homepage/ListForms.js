import React, { Component } from 'react';

class ListForm extends Component {
    
    state = {
        count: 2
    }

    showMore = () => {
        this.setState({ count: this.state.count + 2})
    }
    
    render() {
        
        const { forms } = this.props;
        return (
            <section className='form-filter'>
                    {forms.slice(0, this.state.count).map(form => {
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
                    <div className="docas-show-more col-12">
                        <button className="btn btn-primary docas-show-more-button" onClick={this.showMore}>Załaduj więcej</button>
                    </div>
            </section>
        );
    }

}

export default ListForm;