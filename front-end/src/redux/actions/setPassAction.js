import { SET_PASS } from './types';
import axios from 'axios';

export const setPass = (pass) => dispatch => {

    console.log(pass);
    axios.post('http://localhost:8080/admin/register/', pass, {
        headers: {
            Authorization: sessionStorage.jwt
          }
    })
        .then(response =>
            dispatch({
                type: SET_PASS,
                payload: response
            }))
};

