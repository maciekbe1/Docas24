import React from 'react'
import home_bg from '../../images/01_Home_bg.png';
import { Link } from 'react-router-dom'

class FindForm extends React.Component {
    state = {
        search: ""
    }
    onChange = e => {
        this.setState({search: e.target.value})
    }
    render(){
        return (
            <div className="container-fluid find-form">
                <div className="row">
                    <img alt="home" className="find-form-image" src={home_bg} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 block-find-form">
                            <h1>Znajdź formularz:</h1>
                            <div className="input-group mb-3">
                              <input value={this.state.search} onChange={this.onChange} type="text" className="form-control docas-input" placeholder="Wpisz jakiego formularza szukasz" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                              <i className="fas fa-search fa-2x"></i>
                            </div>
                            <Link to={{ pathname: '/pages/forms', state: { foo: this.state.search} }} className="btn btn-primary docas-find-form-button">SZUKAJ</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindForm;