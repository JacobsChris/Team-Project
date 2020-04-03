import { SIGN_IN, USERNAME } from './types';
import axios from 'axios';

export const signIn = (user) => dispatch => {
    axios.post('http://34.89.60.241:8080/login/', user)
        .then(response =>
            dispatch({
                type: SIGN_IN,
                payload: response
            }, localStorage.setItem('token', response.data.token)))
            .then(() => dispatch({
                type: USERNAME,
                payload: user
            }))         
};

