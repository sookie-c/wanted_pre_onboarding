import React from 'react';
import { useState } from 'react';
import styles from './modal.module.css';

const Modal = (props) => {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.container}>
      <header className={styles.title}>Modal</header>
      <div className={styles.modal}>
        <button className={styles.openBtn} onClick={onClick}>
          Open Modal
        </button>
        {modal === false ? undefined : (
          <div className={styles.background}>
            <div className={styles.popUp}>
              <button className={styles.closeBtn} onClick={onClick}>
                x
              </button>
              <p>HELLO CODESTATES</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
