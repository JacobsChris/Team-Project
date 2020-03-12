import { GET_USER } from './types';
import axios from 'axios';

export const getUsers = (users) => dispatch => {

    console.log(users);
    axios.post('http://localhost:8080/admin/getAllUsers/', users, {
        headers: {
            Authorization: sessionStorage.jwt
          }
    })
        .then(response =>
            dispatch({
                type: GET_USER,
                payload: response
            }))
};

