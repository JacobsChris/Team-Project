import { GET_PEOPLE } from '../actions/types';

const initialState = {
    results: [],
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_PEOPLE:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
}

