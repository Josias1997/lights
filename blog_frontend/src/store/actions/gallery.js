import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const setCategories = (categories, loading) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        categories: categories,
        loading: loading
    }
};

export const fetchCategoriesFailed = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAILED
    }
};

export const initCategories = () => {
    return dispatch => {
       axios.get('api/blog/categories')
           .then(response => {
               dispatch(setCategories(response.data, false))
           }).catch(error => {
               dispatch(fetchCategoriesFailed())
       })
    }
};