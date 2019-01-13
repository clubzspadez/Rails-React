import { GET_ARTICLES } from '../actions/types';

const InitState = { all: [], article:null};

export default function(state = InitState, action){
    switch(action.type){
        case GET_ARTICLES:
            return {
                ...state,
                all: action.payload
            };
        default:
        return state;
        
    }
}