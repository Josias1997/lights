import * as actionTypes from '../actions/actionTypes';

let initialState = {
    articles: [],
    error: false,
    loading: true,
};

const blog = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ARTICLES:
            return {
                ...state,
                articles: action.articles,
                loading: action.loading
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

export default blog;