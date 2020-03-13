import { CREATE_USER } from './types';
import axios from 'axios';
import store from '../store';

export const createUser = (user) => dispatch => {
    axios.post('http://localhost:8080/admin/register/', user, {
        headers: {
            Authorization: store.getState().signin.token[0]
          }
    })
        .then(response =>
            dispatch({
                type: CREATE_USER,
                payload: response
            }))
};

