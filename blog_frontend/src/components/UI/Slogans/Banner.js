import React from 'react';
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const Banner = props => {
    const {newTitle} = props;
    return (
        <Aux>
            <h1>{newTitle}</h1>
        </Aux>
    )
};

export default Banner;