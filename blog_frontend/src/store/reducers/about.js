import * as actionTypes from '../actions/actionTypes';

let initialState = {
    profile: {},
    error: false
};

const about = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case actionTypes.FETCH_ARTICLES_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default about;