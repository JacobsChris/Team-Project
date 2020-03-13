import { SET_PASS } from './types';
import axios from 'axios';
import store from '../store';

export const setPass = (pass) => dispatch => {

    console.log(pass);
    axios.post('http://localhost:8080/admin/register/', pass, {
        headers: {
            Authorization: store.getState().signin.token[0]
          }
    })
        .then(response =>
            dispatch({
                type: SET_PASS,
                payload: response
            }))
};

