import * as actionTypes from '../actions/actionTypes';

let initialState = {
    categories: [],
    error: false,
    loading: true,
};

const blog = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                loading: action.loading
            };
        case actionTypes.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default blog;