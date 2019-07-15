import * as actionTypes from '../actions/actionTypes';

let initialState = {
    profile: [],
    error: false,
    loading: true
};

const about = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
                loading: false
            };
        case actionTypes.SET_PROFILE_FAILED:
            return {
                ...state,
                error: true,
                loading: false
            };
        default:
            return state;
    }
};

export default about;