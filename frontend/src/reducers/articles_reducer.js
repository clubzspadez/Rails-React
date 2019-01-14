import { GET_ARTICLES, GET_ARTICLE } from '../actions/types';

const InitState = { all: [], article:null};

export default function(state = InitState, action){
    switch(action.type){
        case GET_ARTICLES:
            return {
                ...state,
                all: action.payload
            };
        case GET_ARTICLE:
            return { 
                ...state, 
                article: action.payload
            } ;
        default:
        return state;
        
    }
}