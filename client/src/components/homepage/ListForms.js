import React, { Component } from 'react';

class ListForm extends Component {
    
    state = {
        count: 6
    }

    showMore = () => {
        this.setState({ count: this.state.count + 3})
    }
    
    render() {
        
        const { forms } = this.props;
        return (
            <section className='form-filter'>
                    {forms.slice(0, this.state.count).map(form => {
                     return (
                        <div className={form.class + " col-xl-4 col-lg-6"} key={form.id}>
                            <div className="square">
                                <span className="badge badge-primary">Nowość</span>
                                <ul className="nav square-btns">
                                    <li className="btn-link">Zapisz</li>
                                    <li className="btn-link">Oceń</li>
                                    <li className="btn-primary">Wypełnij</li>
                                </ul>
                            </div>
                            <h3 className="font-weight-bold">{form.name}</h3>
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