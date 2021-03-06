import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setPictures = (pictures, loading) => {
    return {
        type: actionTypes.SET_PICTURES,
        pictures: pictures,
        loading: loading
    }
};

export const fetchPicturesFailed = () => {
    return {
        type: actionTypes.FETCH_PICTURES_FAILED
    }
};

export const initPictures = () => {
    return dispatch => {
        axios.get('/api/blog/pictures/')
            .then(response => {
                let updatedPictures = response.data.slice(0, 30);
                dispatch(setPictures(updatedPictures, false))
            }).catch(error => {
                dispatch(fetchPicturesFailed())
        })
    }
};

