import * as actionTypes from '../actions/actionTypes';

let initialState = {
    links : [
            {value: 'LightsPhotography', link: '/'},
            {value: 'Gallerie', link: '/gallery'},
            {value: 'Offres', link: '/offers'},
            {value: 'Blog', link: '/blog'},
            {value: 'A propos', link: '/about-us'}
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