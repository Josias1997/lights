import * as actionTypes from '../actions/actionTypes';

let initialState = {
    offers: [],
    error: false,
    loading: true,
};

const offers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_OFFERS:
            return {
                ...state,
                offers: action.offers,
                loading: action.loading
            };
        case actionTypes.FETCH_OFFERS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default offers;