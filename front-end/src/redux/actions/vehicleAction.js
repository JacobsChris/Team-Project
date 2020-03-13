import { GET_VEHICLE } from './types';
import axios from 'axios';
import store from '../store';

export const getVehicle = (searchData) => dispatch => {

    // console.log(searchData);
    axios.post('http://localhost:8080/back-end/vehicle/getData/', searchData, {
        headers: {
            Authorization: store.getState().signin.token[0]
          }
    })
        .then(response =>
            dispatch({
                type: GET_VEHICLE,
                payload: response
            }))
};

