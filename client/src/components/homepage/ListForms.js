import React, { Component } from 'react';
import formImage from '../../images/file.png';
import Modal from './Modal'

class ListForm extends Component {
    
    state = {
        count: this.props.formCount,
        activeModal: false,
        formName: "",
        formCategory: "",
        formType: "",
        formDescription: "",
        formTag: [],
        formImage: "",
        formLink: ""
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.formCount !== this.state.count) {
            this.setState({count: nextProps.formCount})
        }
    }
    showMore = () => {
        this.setState({ count: this.state.count + 3})
    }
    showModal = (formName, formCategory, formType, formDescription, formTag, formImage, formLink) => {
        this.setState({activeModal: true, 
            formName: formName, 
            formCategory: formCategory, 
            formType: formType, 
            formDescription: formDescription, 
            formTag: formTag,
            formImage: formImage,
            formLink: formLink
        })
    }
    closeModal = () => {
        this.setState({activeModal: false})
    }
    showMoreButtonCondition = () => {
        let show = "d-inline";
        if (this.state.count >= this.props.forms.length) {
            show = "d-none";
        }
        if (this.props.forms.length > 6 ) {
            return (
                <button className={`${show} btn btn-primary docas-show-more-button`} onClick={this.showMore}>Załaduj więcej</button>
            );
        }
    }
    render() {
        const { forms } = this.props;
        return (
            <section className='form-filter'>
                    {forms.slice(0, this.state.count).map(form => {
                     return (
                        <div className={"col-xl-4 col-md-6"} key={form.id}>
                            <div className="square">
                                <span className="badge badge-primary">Nowość</span>
                                <img className={form.image === "" ? "default-image-form-list" : "defined-image-form-list"} alt="document" src={form.image === "" ? formImage : require(`../../images/forms_images/${form.image}`)}/>
                                <ul className="nav square-btns">
                                    <li>
                                        <a className="btn-primary" rel="noopener noreferrer" target="_blank" href={form.link}>Wypełnij</a>
                                    </li>
                                    <li>
                                        <button onClick={this.showModal.bind(this, form.name, form.category, form.type, form.description, form.tags, form.image, form.link)} data-toggle="modal" data-target=".bd-example-modal-lg" className="btn-primary">Szczegóły</button>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="font-weight-bold">{form.name}</h3>
                        </div>
                     )
                    })}
                    <div className="docas-show-more col-12">
                        {
                            this.showMoreButtonCondition(this)
                        }
                    </div>
                    <Modal 
                        formName={this.state.formName}
                        formCategory={this.state.formCategory}
                        formType={this.state.formType}
                        formDescription={this.state.formDescription}
                        formTag={this.state.formTag}
                        formImage={this.state.formImage}
                        formLink={this.state.formLink}
                        activeModal={this.state.activeModal} 
                        handleClose={this.closeModal}>
                    </Modal>
            </section>
        );
    }

}

export default ListForm;