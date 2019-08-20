import React from 'react';
import {connect} from 'react-redux';
import {IconButton} from "@material-ui/core";
import {CloseRounded, MenuRounded} from "@material-ui/icons";
import style from './HomeButton.less';

const HomeButton = props => {
    const {clicked, isOpen} = props;
    return (
        <div className={style.HomeButton} onClick={clicked}>
            <IconButton href={""}>
                {
                    isOpen ? <CloseRounded/> : <MenuRounded/>
                }
            </IconButton>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isOpen: state.main.isOpen
    }
};

export default connect(mapStateToProps)(HomeButton);