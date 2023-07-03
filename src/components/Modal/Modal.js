import * as React from 'react';
import style from './Modal.module.css'

const Modal = (props) => {
  const { center = false, visible, children, onClose } = props;

  return visible ? (
    <div className={style.modal}>
      <div onClick={onClose} className={style.overlay} />
      <div
        className={`${style.innerModal} ${center ? style.center : ''}`}
      >
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;