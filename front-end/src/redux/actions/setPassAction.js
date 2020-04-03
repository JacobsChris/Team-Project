import { SET_PASS } from './types';
import axios from 'axios';

export const setPass = (pass) => dispatch => {
    axios.post('http://34.89.60.241:8080/admin/register/', pass, {
        headers: {
            Authorization: localStorage.getItem('token')
          }
    })
        .then(response =>
            dispatch({
                type: SET_PASS,
                payload: response
            }))
};

