import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const setOffers = (offers, loading) => {
    return {
        type: actionTypes.SET_OFFERS,
        offers: offers,
        loading: loading
    }
};

export const fetchOffersFailed = () => {
    return {
        type: actionTypes.FETCH_OFFERS_FAILED
    }
};

export const initOffers = () => {
    return dispatch => {
       axios.get('api/blog/offers')
           .then(response => {
               dispatch(setOffers(response.data, false))
           }).catch(error => {
               dispatch(fetchOffersFailed())
       })
    }
};