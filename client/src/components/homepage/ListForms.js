import React, { Component } from 'react';
import formImage from '../../images/file.png';
import Modal from './Modal'

class ListForm extends Component {
    
    state = {
        count: this.props.formCount,
        activeModal: false
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.formCount !== this.state.count) {
            this.setState({count: nextProps.formCount})
        }
    }
    showMore = () => {
        this.setState({ count: this.state.count + 3})
    }
    showModal = () => {
        this.setState({activeModal: true})
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
                        <div className={form.type + " col-xl-4 col-md-6"} key={form.id}>
                            <div className="square">
                                <span className="badge badge-primary">Nowość</span>
                                <img alt="document" src={form.image === "" ? formImage : require(`../../images/forms_images/${form.image}`)}/>
                                <ul className="nav square-btns">
                                    <li>
                                        <a className="btn-primary" rel="noopener noreferrer" target="_blank" href={form.link}>Wypełnij</a>
                                    </li>
                                    <li>
                                        <button onClick={this.showModal} data-toggle="modal" data-target=".bd-example-modal-lg" className="btn-primary">Szczegóły</button>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="font-weight-bold">{form.name}</h3>
                            <Modal 
                                form={form} 
                                activeModal={this.state.activeModal} 
                                handleClose={this.closeModal}>
                            </Modal>
                        </div>
                     )
                    })}
                    <div className="docas-show-more col-12">
                        {
                            this.showMoreButtonCondition(this)
                        }
                    </div>
            </section>
        );
    }

}

export default ListForm;