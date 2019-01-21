import React from 'react';
import formImg from '../../images/file.png';
import '../../styles/modal.css'

const Modal = ({ handleClose, activeModal, formName, formCategory, formType, formDescription, formTag, formImage, formLink, children }) => {
  const showHideClassName = activeModal ? "modal fade bd-example-modal-lg show" : "modal fade bd-example-modal-lg";

  return (
    <div className={showHideClassName} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">{formName}</h5>
                    <button onClick={handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div className="modal-body">
                <div >
                    <img className="modal-image" alt="document" src={formImage === "" ? formImg : require(`../../images/forms_images/${formImage}`)}/>
                    <ul className="modal-list">
                        <li><p><span className="font-weight-bold">Kategoria:</span> {formCategory}</p></li>
                        <li><p><span className="font-weight-bold">Typ:</span> {formType}</p></li>
                        <li><p><span className="font-weight-bold">Opis:</span> {formDescription}</p></li>
                        <li className="d-flex"><p><span className="font-weight-bold">Tagi:</span></p><ul className="d-flex">
                            {
                                formTag.map((tag, index) =>{
                                    return <li key={index}><p>#{tag}</p></li>
                                })
                            }
                        </ul></li>
                    </ul>
                </div>
            </div>
                <div className="modal-footer">
                    <a className="btn btn-primary" rel="noopener noreferrer" target="_blank" href={formLink}>Wypełnij</a>
                    <button onClick={handleClose} type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Modal;