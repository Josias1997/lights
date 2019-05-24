import React from 'react';
import truncate from '../../../../../helpers/truncate';
import './Offer.css';

const Offer = props => {
    const {offer} = props;
    let content = truncate(offer.content, null, null);
    return(
        <div className={"Offer"}>
            <h3>{offer.title}</h3>
            <i>{offer.created_at}</i>
            <div>
               <img src={offer.url} alt={offer.url}/>
            </div>
            <p>{content}</p>
        </div>
    )
};

export default Offer;