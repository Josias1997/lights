import React from 'react';
import truncate from "../../../../helpers/truncate";
import './Card.css';

const Card = props => {
    const {card, single} = props;
    let content = null;
    if (!single) {
        const {handleClick} = props;
        let truncatedContent = truncate(card.content, 200, null);
        content = <div className={"Card"}>
            <img src={card.url} alt={card.url}/>
            <div className={"CardBody"}>
                <h2>{card.title}</h2>
                <p>{truncatedContent}</p>
                <button onClick={() => handleClick(card.id)}>More</button>
            </div>
        </div>
    } else {
        content = <div className={"ModalContent"}>
            <img src={card.url} alt={card.url}/>
            <div className={"CardBody"}>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
            </div>
        </div>
    }
    return (
        content
    );
};

export default Card;

