import { GET_VEHICLE } from './types';
import axios from 'axios';

export const getVehicle = (searchData) => dispatch => {

    // console.log(searchData);
    axios.post('http://localhost:8080/back-end/vehicle/getData/', searchData, {
        headers: {
            Authorization: sessionStorage.jwt
          }
    })
        .then(response =>
            dispatch({
                type: GET_VEHICLE,
                payload: response
            }))
};

