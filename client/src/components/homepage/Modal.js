import React from 'react';
import formImage from '../../images/file.png';
import '../../styles/modal.css'

const Modal = ({ handleClose, activeModal, form, children }) => {
  const showHideClassName = activeModal ? "modal fade bd-example-modal-lg show" : "modal fade bd-example-modal-lg";

  return (
    <div className={showHideClassName} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">{form.name}</h5>
                    <button onClick={handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div className="modal-body">
                <div >
                    <img className="modal-image" alt="document" src={form.image === "" ? formImage : require(`../../images/forms_images/${form.image}`)}/>
                    <ul className="modal-list">
                        <li><p><span className="font-weight-bold">Kategoria:</span> {form.category}</p></li>
                        <li><p><span className="font-weight-bold">Typ:</span> {form.type}</p></li>
                        <li><p><span className="font-weight-bold">Opis:</span> {form.description}</p></li>
                    </ul>
                </div>
            </div>
                <div className="modal-footer">
                    <a className="btn btn-primary" rel="noopener noreferrer" target="_blank" href={form.link}>Wypełnij</a>
                    <button onClick={handleClose} type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Modal;