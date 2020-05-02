import React from 'react';
import '../style.css';
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
         <div onClick={handleClose} className="close"></div>
        <section className="modal-main">
          {children}
        </section>
      </div>
    );
  };

export default Modal;