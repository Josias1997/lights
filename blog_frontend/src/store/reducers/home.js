import * as actionTypes from '../actions/actionTypes';

let initialState = {
    pictures: [],
    loading: true,
    error: false,
    open: false,
    id: ''
};

const home = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PICTURES:
            return {
                ...state,
                pictures: action.pictures,
                loading: action.loading
            };
        case actionTypes.FETCH_PICTURES_FAILED:
            return {
                ...state,
                error: true
            };
        case actionTypes.OPEN_MODAL:
            return {
                ...state,
                open: true,
                id: action.selectedId
            };
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                open: false,
                id: ''
            };
        default:
            return state;
    }
};

export default home;