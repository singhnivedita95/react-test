import React from "react";
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const ModalComponent = (props) => {
    return(
       <Modal
            isOpen={props.show}
            // onAfterOpen={afterOpenModal}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="d-flex justify-content-between align-items-start mb-2">
           <h4 className=" ">Replace</h4>
               <button type="button" className="close" onClick={props.closeModal}>
                   <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <p className="mb-3">
                Do you want to replace <b>Image A</b> for <b className="text-danger">Image B</b>?
            </p>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-block btn-danger mr-3" onClick={props.closeModal}>No</button>
                <button type="button" className="btn btn-block btn-outline-success mt-0" onClick={props.replaceImage}>Replace</button>
            </div>
        </Modal>
    )
};

export default ModalComponent;
