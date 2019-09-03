import React, {useState} from 'react';
import OffersModalContent from "./OffersModal/OffersModal";
import './Modal.css';


const MyModal = props => {
    const {id, open} = props;

    let content = null;

    if (open) {
        content = <OffersModalContent id={id}/>
    }
    const style = {
      display: open ? 'block':'none',
      position: 'fixed',
      zIndex: 10000,
      left: 0,
      top: 0,
      width: 100 + '%',
      height: 80 + '%',
      overflow: 'auto',
      backgroundColor: 'rgba(0, 0, 0)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }

    return (
      <div id="myModal" style={{...style}}>
      <div className="modal-content">
        {content}
      </div>
      <button>Fermer</button>
    </div>
          
    );
};

export default MyModal;