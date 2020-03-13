import { GET_USER } from './types';
import axios from 'axios';
import store from '../store';

export const getUsers = (users) => dispatch => {

    console.log('getuseraction');
    axios.get('http://localhost:8080/admin/getAllUsers/', {
        headers: {
            Authorization: store.getState().signin.token[0]
          }
    })
        .then(response =>
            dispatch({
                type: GET_USER,
                payload: response
            }))
};

