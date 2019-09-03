import React, {useState} from 'react';
import OffersModalContent from "./OffersModal/OffersModal";
import styles from './Modal.less';


const MyModal = props => {
    const {id, open, close} = props;

    let content = null;

    if (open) {
        content = <OffersModalContent id={id}/>
    }

    return (
      <div id="myModal" className={open ? styles.ModalOpen: styles.ModalOpen
        + " " + styles.ModalClose}>
      <div className={styles.ModalContent}>
        {content}
        <button className="btn btn-danger mt-5" onClick={close}>Fermer</button>
      </div>
    </div>
          
    );
};

export default MyModal;