import { GET_USER } from './types';
import axios from 'axios';

export const getUser = (searchData) => dispatch => {

    console.log(searchData);
    axios.post('http://localhost:8080/register/', searchData, {
        headers: {
            Authorization: sessionStorage.jwt
          }
    })
        .then(response =>
            dispatch({
                type: GET_USER,
                payload: response
            }))
};

