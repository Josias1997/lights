import React from 'react';
import './Offer.css';

const Offer = props => {
    const {offer} = props;
    return(
        <div className={"Offer"}>
            <h3>{offer.title}</h3>
            <i>{offer.created_at}</i>
            <div>
               <img src={offer.url} alt={offer.url}/>
            </div>
            <p>{offer.content}</p>
        </div>
    )
};

export default Offer;