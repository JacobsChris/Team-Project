import { combineReducers } from 'redux';
import getReducer from './getReducer'; 
import getVehicle from './getVehicle';
import createUser from './createUser';
import getUser from './getUser';
import setPass from './setPass';
import setAdmin from './setAdmin';
import signIn from './signIn';

export default combineReducers({
    response: getReducer,
    vehicle: getVehicle,
    allUsers: createUser,
    user: getUser,
    pass: setPass,
    admin: setAdmin,
    signin: signIn
});