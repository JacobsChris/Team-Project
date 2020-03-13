import { SET_ADMIN } from './types';
import axios from 'axios';
import store from '../store';

export const setAdmin = (admin) => dispatch => {

    console.log(pass);
    axios.post('http://localhost:8080/admin/register/', admin, {
        headers: {
            Authorization: store.getState().signin.token[0]
          }
    })
        .then(response =>
            dispatch({
                type: SET_ADMIN,
                payload: response
            }))
};

