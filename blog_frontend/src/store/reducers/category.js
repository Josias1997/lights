import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categoryPictures: [],
    error: false,
    loading: true,
    size: 0
};

const category = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CATEGORY_PICTURES:
            let newState = {};
            Object.assign(newState, state);
            newState.categoryPictures.push({
                idCategory: action.id,
                categoryName: action.name,
                categoryPictures: action.pictures
            });
            newState.loading = false;
            newState.size += 1;
            return  {
                ...newState,
            };
        case actionTypes.SET_CATEGORY_PICTURES_FAILED:
            return {
                ...state,
                error: true,
                loading: false
            };
        default:
            return state;
    }
};

export default category;