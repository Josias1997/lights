import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const setArticles = (articles, loading) => {
    return {
        type: actionTypes.SET_ARTICLES,
        articles: articles,
        loading: loading
    }
};

export const fetchArticlesFailed = () => {
    return {
        type: actionTypes.FETCH_ARTICLES_FAILED
    }
};

export const initArticles = () => {
    return dispatch => {
       axios.get('blog/api/articles')
           .then(response => {
               dispatch(setArticles(response.data, false))
           }).catch(error => {
               dispatch(fetchArticlesFailed())
       })
    }
};