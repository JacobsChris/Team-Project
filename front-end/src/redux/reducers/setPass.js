import { SET_PASS } from '../actions/types';

const initialState = {
    results: [],
};

export default function(state = initialState, action){
    switch(action.type){
        case SET_PASS:
            console.log(action.payload.data);
            return {
                ...state,
                results: [action.payload.data]
            };
        default:
            return state;
    }
}
