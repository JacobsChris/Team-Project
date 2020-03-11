import { GET_PEOPLE, SET_RESULTS_LOADING } from '../actions/types';

const initialState = {
    results: [],
    resultsLoading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_PEOPLE:
            console.log(' redux:', action.payload.data);
            return {
                ...state,
                results: [...action.payload.data],
                resultsLoading: false
            };
        case SET_RESULTS_LOADING:
            return {
                ...state,
                resultsLoading: !!action.payload
            }
        default:
            return state;
    }
}

