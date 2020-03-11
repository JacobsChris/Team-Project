import { combineReducers } from 'redux';
import getReducer from './getReducer'; 
import getVehicle from './getVehicle';
import getUser from './getUser';

export default combineReducers({
    response: getReducer,
    vehicle: getVehicle,
    user: getUser
});