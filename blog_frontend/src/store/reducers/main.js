import * as actionTypes from '../actions/actionTypes';

let initialState = {
    links : [
            {value: 'LightsPhotography', link: '/'},
            {value: 'Gallery', link: '/gallery'},
            {value: 'Offers', link: '/offers'},
            {value: 'Blog', link: '/blog'},
            {value: 'About Us', link: '/about-us'}
        ],
    isOpen: false
};

const main = (state = initialState, action) => {
    if (action.type === actionTypes.TOGGLE_NAV) {
        return {
            ...state,
            isOpen: window.innerWidth <= 550 ? !state.isOpen:false
        };
    } else {
        return state;
    }
};

export default main;