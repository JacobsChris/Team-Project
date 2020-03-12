import { SIGN_IN } from './types';
import axios from 'axios';

export const signIn = (user) => dispatch => {

    console.log(user);
    axios.post('http://localhost:8080/login/', user)
        .then(response =>
            dispatch({
                type: SIGN_IN,
                payload: response
            }))
};

