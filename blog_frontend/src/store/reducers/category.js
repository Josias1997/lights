import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name: '',
    pictures: [],
    error: false
};

const category = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CATEGORY_PICTURES:
            let newState = Object.assign(state);
            return  {
                ...state,
                name: action.name,
                pictures: action.pictures
            };
        case actionTypes.SET_CATEGORY_PICTURES_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default category;