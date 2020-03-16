import { GET_PEOPLE, SET_RESULTS_LOADING } from './types';
import axios from 'axios';

export const getPeople = (searchData) => dispatch => {

    dispatch({
        type: SET_RESULTS_LOADING,
        payload: true
    });
    axios.post('http://localhost:8080/back-end/person/getData', searchData, {
        headers: {
            Authorization: sessionStorage.jwt
        }
    })
        .then(response =>
        dispatch({
            type: GET_PEOPLE,
            payload: response
        })
        )      
};


