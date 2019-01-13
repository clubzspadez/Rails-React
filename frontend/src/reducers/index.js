import { combineReducers } from 'redux';
import article_reducers from './articles_reducer';
import {reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
    articles: article_reducers,
    form: formReducer
})

export default allReducers;