import { SIGN_IN, SIGN_OUT } from '../actions/types';


const initialState = {
    user: [],
};

export default function(state = initialState, action){
    switch(action.type){
        case SIGN_IN:
            console.log(action.payload.data);
            return {
                ...state,
                user: [action.payload.data],
                isAdmin: [action.payload.data.admin],
                token: [action.payload.data.token]
            };
        case SIGN_OUT:
            return {
                ...state,
                isAdmin: '',
                token: '',
                user: ''
            }
        default:
            return state;
    }
}

