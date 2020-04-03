import { CREATE_USER } from './types';
import axios from 'axios';

export const createUser = (user) => dispatch => {
    axios.post('http://34.89.60.241:8080/admin/register/', user, {
        headers: {
            Authorization: localStorage.getItem('token')
          }
    })
        .then(response =>
            dispatch({
                type: CREATE_USER,
                payload: response
            }))
};

