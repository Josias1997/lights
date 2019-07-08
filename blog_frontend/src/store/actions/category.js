import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setCategoryPictures = (name, pictures) => {
    return {
        type: actionTypes.SET_CATEGORY_PICTURES,
        name: name,
        pictures: pictures
    }
};

export const setCategoryPicturesFailed = () => {
    return {
        type: actionTypes.SET_CATEGORY_PICTURES_FAILED
    }
};

export const initCategoryPictures = (category, single) => {
    return dispatch => {
        axios.get('api/blog/categories/' + category.id)
            .then(response => {
                dispatch(setCategoryPictures(category.name, single ? Array(response.data[0]) : response.data))
            }).catch(error => {
                dispatch(setCategoryPicturesFailed())
        })
    }
};