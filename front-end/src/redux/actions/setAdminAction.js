import { SET_ADMIN } from './types';
import axios from 'axios';
import store from '../store';

export const setAdmin = (admin) => dispatch => {

    console.log(pass);
    axios.post('http://35.246.9.251:8080/admin/register/', admin, {
        headers: {
            Authorization: localStorage.getItem('token')
          }
    })
        .then(response =>
            dispatch({
                type: SET_ADMIN,
                payload: response
            }))
};

