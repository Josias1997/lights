import React from 'react';
import truncate from "../../../../helpers/truncate";
import styles from './Card.less';

const Card = props => {
    const {card, single} = props;
    let content = null;
    if (!single) {
        const {handleClick} = props;
        let truncatedContent = truncate(card.content, 200, null);
        content = <div className={styles.Card}>
            <img src={card.url} alt={card.url}/>
            <div className={styles.CardBody}>
                <h2>{card.title}</h2>
                {card.price !== null ? (<h3>Price: {card.price}</h3>):null}
                <p>{truncatedContent}</p>
                <button onClick={() => handleClick(card.id)}>More</button>
            </div>
        </div>
    } else {
        content = <div className={styles.ModalContent}>
            <img src={card.url} alt={card.url}/>
            <div className={styles.CardBody}>
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

