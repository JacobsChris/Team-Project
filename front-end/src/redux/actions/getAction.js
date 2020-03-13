import { GET_PEOPLE, SET_RESULTS_LOADING } from './types';
import axios from 'axios';
import store from '../store';

export const getPeople = (searchData) => dispatch => {

    console.log(searchData);

    dispatch({
        type: SET_RESULTS_LOADING,
        payload: true
    });
    axios.post('http://localhost:8080/back-end/person/getData', searchData, {
        headers: {
            Authorization: store.getState().signin.token[0]
        }
    })
        .then(response =>
        dispatch({
            type: GET_PEOPLE,
            payload: response
        }))
};


