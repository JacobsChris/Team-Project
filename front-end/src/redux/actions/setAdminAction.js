import { SET_ADMIN } from './types';
import axios from 'axios';

export const setAdmin = (admin) => dispatch => {

    console.log(pass);
    axios.post('http://localhost:8080/admin/register/', admin, {
        headers: {
            Authorization: sessionStorage.jwt
          }
    })
        .then(response =>
            dispatch({
                type: SET_ADMIN,
                payload: response
            }))
};

