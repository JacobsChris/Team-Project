import { GET_USER } from './types';
import axios from 'axios';

export const getUsers = (users) => dispatch => {
    axios.get('http://10.154.0.3:8080/admin/getAllUsers/', {
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

