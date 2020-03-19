import { GET_PEOPLE, SET_RESULTS_LOADING } from './types';
import axios from 'axios';
import store from '../store';

export const getPeople = (searchData) => dispatch => {

    dispatch({
        type: SET_RESULTS_LOADING,
        payload: true
    });
    axios.post('http://35.246.9.251:8080/back-end/person/getData', searchData, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then(response =>
        dispatch({
            type: GET_PEOPLE,
            payload: response
        })
        )      
};


