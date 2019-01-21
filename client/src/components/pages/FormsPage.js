import React from 'react'
import forms from '../../data/forms.json';
import forms_bg from '../../images/02_Forms_bg.png';
import FilteredForms from '../forms/FilteredForms';
import Formsfilters from '../forms/FormsFilters';

class FormsPage extends React.Component {
    state = {
        search: "",
        firstForm: 0,
        lastForm: 5,
        forms: forms,
        category: '',
        type: '',
        year: '',
        department: ''
    };
    
    filterItems = (val, type) => {
        switch (type) {
            case 'category':
                this.setState({category: val});
                break;
            case 'type':
                this.setState({type: val});
                break;
            case 'year':
                this.setState({year: val});
                break;
            case 'department':
                this.setState({department: val});
                break;
            default:
                break;
       }
     }
     
    onChange = e => {
        this.setState({search: e.target.value, firstForm: 0, lastForm: 5})
    }
    componentDidMount(props){
        if (this.props.location.state !== undefined) {
            this.setState({search: this.props.location.state});
        } else {
            this.setState({search: ''});
        }
    }

    render() {
        let filteredItems = this.state.forms;
        let state = this.state;
        ["category", "type", "year", "department"].forEach(function(filterBy) {
          let filterValue = state[filterBy];
          if (filterValue) {
            filteredItems = filteredItems.filter(function(item) {
              return item[filterBy] === filterValue;
            });
          }
        });
        let categoryArray = this.state.forms.map(function(item) { return item.category });
        let typeArray = this.state.forms.map(function(item) { return item.type });
        let yearArray = this.state.forms.map(function(item) { return item.year });
        let departmentArray = this.state.forms.map(function(item) { return item.department });
        categoryArray.unshift("");
        typeArray.unshift("");
        yearArray.unshift("");
        departmentArray.unshift("");
        categoryArray = [...new Set(categoryArray)];
        typeArray = [...new Set(typeArray)];
        yearArray = [...new Set(yearArray)];
        departmentArray = [...new Set(departmentArray)];
        
        const filtered = filteredItems.filter(form => {
            const tags = () => {
                return form.tags.find((element) => {
                    return element.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                });
            }
            const names = () => {
                return form.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
            if (names()) {
                return names();
            } else {
                return tags();
            }
        });
        return (
            <div className="container-fluid form-search">
                <div className="row">
                    <img alt="forms" className="form-page-main-image" src={forms_bg} />
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
                            <FilteredForms activePageNumber={1} firstForm={this.state.firstForm} lastForm={this.state.lastForm} filtered={filtered} />
                        </div>
                        
                        <div className="col-lg-3 categories">
                            <h5>Filtry Formularzy</h5>
                            <div className="form-category">
                                <Formsfilters
                                    data={this.state.forms}
                                    categoryOptions={categoryArray}
                                    typeOptions={typeArray}
                                    yearOptions={yearArray}
                                    departmentOptions={departmentArray}
                                    changeOption={this.filterItems}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormsPage;