import { SIGN_IN, SIGN_OUT, USERNAME } from '../actions/types';


const initialState = {
    user: [],
};

export default function(state = initialState, action){
    switch(action.type){
        case SIGN_IN:
            console.log('reducers sign in', action.payload.data)
            return {
                ...state,
                user: [action.payload.data],
                isAdmin: [action.payload.data.admin]
            };
        case USERNAME: 
            return {
                ...state,
                username: [action.payload.username]
            }
        case SIGN_OUT:
            return {
                ...state,
                isAdmin: '',
                user: '',
            }
        default:
            return state;
    }
}

