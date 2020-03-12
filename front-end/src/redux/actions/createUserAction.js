import { CREATE_USER } from './types';
import axios from 'axios';

export const createUser = (user) => dispatch => {

    console.log(user);
    axios.post('http://localhost:8080/register/', user, {
        headers: {
            Authorization: sessionStorage.jwt
          }
    })
        .then(response =>
            dispatch({
                type: CREATE_USER,
                payload: response
            }))
};

