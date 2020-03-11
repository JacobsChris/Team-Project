import { combineReducers } from 'redux';
import getReducer from './getReducer'; 
import getVehicle from './getVehicle';

export default combineReducers({
    response: getReducer,
    vehicle: getVehicle
});