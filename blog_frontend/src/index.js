import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import App from './containers/App';
import homeReducer from "./store/reducers/home";
import galleryReducer from './store/reducers/gallery';
import offersReducer from './store/reducers/offers';
import axios from 'axios';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    home: homeReducer,
    gallery: galleryReducer,
    offer: offersReducer,
});

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


axios.interceptors.response.use(response => {
    return response.headers['content-type'] === 'application/json' ? response : Promise.reject(response)
    
}, error => Promise.reject(error));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("app"));