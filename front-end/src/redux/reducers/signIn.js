import { SIGN_IN, SIGN_OUT, USERNAME } from '../actions/types';


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
                // token: [action.payload.data.token]
            };
        case USERNAME: 
            console.log(action.payload.username)
            return {
                ...state,
                username: [action.payload.username]
            }
        case SIGN_OUT:
            return {
                ...state,
                isAdmin: '',
                user: ''
            }
        default:
            return state;
    }
}

