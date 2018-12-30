import React, { Component } from 'react';
import docImage from '../../images/file.png';

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
                        <div className={form.type + " col-xl-4 col-md-6"} key={form.id}>
                            <div className="square">
                                <span className="badge badge-primary">Nowość</span>
                                <img alt="document" src={docImage}/>
                                <ul className="nav square-btns">
                                    <li className="btn-primary">
                                        <a href="https://docas24.bpower2.com/index.php/site/login">Wypełnij</a>
                                    </li>
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