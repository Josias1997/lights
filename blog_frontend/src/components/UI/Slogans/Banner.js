import React from 'react';
import truncate from "../../../helpers/truncate";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const Banner = props => {
    const {elementTitle, created_at, content} = props.element;
    let date = new Date(created_at).toString();
    let truncatedContent = truncate(content, null, null);
    return (
        <Aux>
            <h1>{props.newTitle}</h1>
            <h3>{elementTitle}</h3>
            <i>{date}</i>
            <p>{truncatedContent}</p>
            {props.newTitle === 'Last Offer' ? <h1>Price : {props.element.price}</h1> : null}
        </Aux>
    )
};

export default Banner;