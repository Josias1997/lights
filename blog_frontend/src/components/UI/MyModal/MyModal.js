import React, {Component} from 'react';
import Modal from 'react-responsive-modal'
import OffersModalContent from "./OffersModal/OffersModal";
import BlogModalContent from "./BlogModal/BlogModal";
import HomeModalContent from "./HomeModal/HomeModal";

class MyModal extends Component {

    render() {
        const {id, open, close, type} = this.props;
        let content = null;
        if (open) {
            if (type === 'offers') {
                // content = <CustomCard card={this.state.elements} single={true}/>
                content = <OffersModalContent id={id}/>
            } else if (type === 'articles') {
                content = <BlogModalContent id={id}/>
            } else if (type === 'categories') {
                // content = <CustomCarousel images={this.state.elements} auto={true} interval={2000}/>
                content = <HomeModalContent id={id}/>
            }
        }

        return (
            <Modal
                open={open}
                onClose={close}
                center
            >
                {content}
            </Modal>
        )
    }
}

export default MyModal;