import React from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

const portal = document.getElementById("modal");

const Backdrop = (prop) => {
  return <div className="backdrop" />;
};

const Overlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop />, portal)}
      {createPortal(<Overlay>{props.children}</Overlay>, portal)}
    </React.Fragment>
  );
};
export default Modal;
