import React from "react";
import classes from "../UI/Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlays = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlays>{children}</ModalOverlays>,
        portalElement
      )}
    </>
  );
};

export default Modal;
