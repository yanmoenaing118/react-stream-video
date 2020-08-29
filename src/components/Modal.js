import React from "react";
import ReactDOM from "react-dom";

import style from "./../styles/components/Modal.module.scss";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className={style.modal} onClick={props.clicked}>
      <div className={style.modal_body} onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
