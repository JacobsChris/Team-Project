import { GET_USER } from './types';
import axios from 'axios';

export const getUsers = (users) => dispatch => {
    axios.get('http://34.89.60.241:8080/admin/getAllUsers/', {
        headers: {
            Authorization: localStorage.getItem('token')
          }
    })
        .then(response =>
            dispatch({
                type: GET_USER,
                payload: response
            }))
};

