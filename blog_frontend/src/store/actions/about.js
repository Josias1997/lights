import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setProfile = profile => {
    return {
        type: actionTypes.SET_PROFILE,
        profile: profile
    }
};

export const setProfileFailed = () => {
    return {
        type: actionTypes.SET_PROFILE_FAILED
    }
};

export const initProfile = () => {
    return dispatch => {
        axios.get('api/blog/about-us/')
            .then(response => {
                dispatch(setProfile(response.data))
            }).catch(error => {
                dispatch(setProfileFailed())
        })
    }
};