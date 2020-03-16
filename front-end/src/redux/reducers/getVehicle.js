import { GET_VEHICLE, SET_VEHICLE_RESULTS_LOADING } from '../actions/types';

const initialState = {
    results: [],
    resultsLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLE:
            console.log(action.payload.data);
            return {
                ...state,
                results: [action.payload.data],
                resultsLoading: false
            };
        case SET_VEHICLE_RESULTS_LOADING:
            return {
                ...state,
                resultsLoading: !!action.payload
            }
        default:
            return state;
    }
}

