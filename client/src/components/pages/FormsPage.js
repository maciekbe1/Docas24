import React from 'react'
import forms from '../../data/forms.json';
import forms_bg from '../../images/02_Forms_bg.png';

class FormsPage extends React.Component {
    state = {
        search: this.props.location.state.foo
    }
    onChange = e => {
        this.setState({search: e.target.value})
    }
    render() {
        const filtered = forms.filter(form => {
            return form.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 block-find-form">
                        <h1>Znajdź formularz:</h1>
                        <div className="input-group mb-3">
                          <input value={this.state.search} onChange={this.onChange} type="text" className="form-control docas-input" placeholder="Wpisz jakiego formularza szukasz" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">
                            <i className="fas fa-search fa-2x"></i>
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-primary docas-find-form-button">SZUKAJ</button>
                    </div>
                    <div className="col-lg-6">
                        <img alt="home" className="find-form-image" src={forms_bg} />
                    </div>
                </div>
                <div>
                <h2>Dostępne formularze</h2>
                {filtered.map(form => {
                    return (
                        <div key={form.id}>
                            <p>{form.name}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
}

export default FormsPage;