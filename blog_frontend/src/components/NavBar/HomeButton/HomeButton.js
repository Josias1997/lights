import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './HomeButton.less';

const HomeButton = props => {
    return (
        <div className={style.HomeButton} onClick={props.clicked}>
            <FontAwesomeIcon icon={"home"} />
        </div>
    );
};

export default HomeButton;