import React from 'react';
import {connect} from 'react-redux';
import Card from "../../Grid/CustomCard/CustomCard";

const OffersModalContent = ({offers, id}) => {
    let offer = offers.filter(offer => (
        offer.id === id
    ))[0];
    return (
        <div>
             <Card card={offer} single={true}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        offers: state.offer.offers
    }
};


export default connect(mapStateToProps)(OffersModalContent);