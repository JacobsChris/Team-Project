import { GET_PEOPLE } from '../actions/types';

const initialState = {
    results: [],
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_PEOPLE:
            console.log(action.payload.data);
            return {
                ...state,
                results: [action.payload.data]
            };
        default:
            return state;
    }
}

