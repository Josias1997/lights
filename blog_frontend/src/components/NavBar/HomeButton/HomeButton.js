import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HomeButton.css';

const HomeButton = props => {
    return (
        <div className={"HomeButton"} onClick={props.clicked}>
            <FontAwesomeIcon icon={"home"} />
        </div>
    );
};

export default HomeButton;