import React from 'react'
import forms from '../../data/forms.json';
import forms_bg from '../../images/02_Forms_bg.png';
import FilteredForms from '../forms/FilteredForms';
import FormsCategories from '../forms/FormsCategories';
import FormsDropdownFilter from '../forms/FormsDropdownFilter';

class FormsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            category: [],
            count: [],
        };
        this.onChangeCategory = this.onChangeCategory.bind(this);
    }
    componentDidMount(props){
        if (this.props.location.state !== undefined) {
            this.setState({search: this.props.location.state});
        } else {
            this.setState({search: ''});
        }

        const formsCategory = forms;
        let categories = [];
        formsCategory.forEach(form => {
            categories.push(form.category)
        })

        let unique = [...new Set(categories)];
        this.setState({category: unique});

        var uniqueCount = forms;
        var  countCategories = {};
        uniqueCount.forEach((i) => { countCategories[i.category] = ( countCategories[i.category] || 0 ) + 1;});
        this.setState({count: Object.values(countCategories)});

    }
    onChange = e => {
        this.setState({search: e.target.value})
    }
    onChangeCategory = (e) => {
       const filterCategory = forms.filter(form => form.category === e.target.innerHTML);
        this.setState({search: e.target.innerHTML})
        console.log(filterCategory)
    }

    render() {
        const filtered = forms.filter(form => {
            return form.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })
        return (
            <div className="container-fluid form-search">
                <div className="row">
                    <img alt="forms" className="form-image" src={forms_bg} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-0 col-lg-6 offset-lg-3 block-find-form">
                            <h1>Znajdź formularz:</h1>
                            <div className="input-group mb-3">
                              <input value={this.state.search} onChange={this.onChange} type="text" className="form-control docas-input" placeholder="Wpisz jakiego formularza szukasz" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                              <i className="fas fa-search fa-2x"></i>
                            </div>
                            <button className="btn btn-primary docas-find-form-button">SZUKAJ</button>
                        </div>
                    </div>
                </div>
                <div className="container available-forms">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="text-center">Dostępne formularze</h2>
                            <FilteredForms filtered={filtered} />
                        </div>
                        {/* <div className="col-lg-3 categories">
                            <h5>Kategorie Formularzy</h5>
                            {this.state.category.map((item, index) => {
                                 return (
                                    <div className="form-category" key={index}>
                                        <FormsCategories category={item} count={this.state.count[index]} action={this.onChangeCategory} />
                                    </div>
                            )})}
                            {forms.map((item, index) => {
                                return (
                                   <div className="form-dropdown-filter" key={index}>
                                       <FormsDropdownFilter category={item.category} year={item.year} type={item.type} department={item.department} />
                                   </div>
                           )})}
                                </div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default FormsPage;