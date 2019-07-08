import * as actionTypes from '../actions/actionTypes';

let initialState = {
    categories: [],
    error: false,
    loading: true,
    single: true
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
        case actionTypes.TOGGLE_SINGLE:
            return {
                ...state,
                single: action.single
            };
        default:
            return state;
    }
};

export default blog;