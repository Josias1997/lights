import React from 'react';
import OffersModalContent from "./OffersModal/OffersModal";
import HomeModalContent from "./HomeModal/HomeModal";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70 + '%'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



const MyModal = props => {
    const classes = useStyles();
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
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {content}
          </div>
        </Fade>
      </Modal>
          
    );
};

export default MyModal;