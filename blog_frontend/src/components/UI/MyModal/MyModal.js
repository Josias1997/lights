import React from 'react';
import OffersModalContent from "./OffersModal/OffersModal";
import HomeModalContent from "./HomeModal/HomeModal";
import Modal from 'react-responsive-modal';

const MyModal = props => {

    const {id, open, close, type} = props;
    let content = null;
    if (open) {
        if (type === 'offers') {
            content = <OffersModalContent id={id}/>
        } else if (type === 'categories') {
            content = <HomeModalContent id={id}/>
        }
    }

    return (
        <div className={"container z-depth-5"}>
            <Modal open={open}
                   onClose={close}>
                {content}
            </Modal>
        </div>
    );
};

export default MyModal;