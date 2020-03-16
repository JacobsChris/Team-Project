import { GET_VEHICLE, SET_VEHICLE_RESULTS_LOADING } from './types';
import axios from 'axios';

export const getVehicle = (searchData) => dispatch => {

    dispatch({
        type: SET_VEHICLE_RESULTS_LOADING,
        payload: true
    });

    axios.post('http://localhost:8080/back-end/vehicle/getData/', searchData, {
        headers: {
            Authorization: localStorage.getItem('token')
          }
    })
        .then(response =>
            dispatch({
                type: GET_VEHICLE,
                payload: response
            }))
};

