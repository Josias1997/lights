import React, {Component, Fragment} from 'react';
import OffersModalContent from "./OffersModal/OffersModal";
import GalleryModalContent from "./GalleryModal/GalleryModal";
import styles from './Modal.less';
import Portal from "../../Utility/Portal/Portal.js";
import Button from "../Button/Button.js";


class MyModal extends Component {

  listenKeyboard = event => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }
  componentDidMount() {
    if (this.props.onClose()) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }
  componentWillUnMount() {
    if(this.props.onClose()) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }
  onOverlayClick = () => {
    this.props.onClose();
  }
  onDialogClick = (event) => {
    event.stopPropagation();
  }

  render() {
    const {id, open, location, pictureId} = this.props;
    let content = null;
    let styleClass = styles.DialogOffer;

    if (location === 'offers') {
      content = <OffersModalContent id={id}/>;
    }
    else if(location === 'gallery') {
       content = <GalleryModalContent currentCategory={id} pictureId={pictureId}/>;
       styleClass = styles.DialogGallery;

    }

    return (
      <Portal>
      {
        open ? <Fragment> <div className={styles.Overlay} />
          <div className={styles.Content} onClick={this.onOverlayClick}>
            <Button type="button" styleClasses="btn-floating btn-danger waves-effect waves-light float-right" 
              click={this.props.onClose} style={{
                zIndex: 1000
              }}>
                  <i className="fas fa-times" aria-hidden="true"></i>
              </Button>
            <div className={styleClass} onClick={this.onDialogClick}>
               {content}
            </div>
        </div></Fragment>:null

      }
      </Portal>
    );
  }
};

export default MyModal;