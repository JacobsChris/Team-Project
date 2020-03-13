import { combineReducers } from 'redux';
import getReducer from './getReducer'; 
import getVehicle from './getVehicle';
import createUser from './createUser';
import getUser from './getUser';
import setPass from './setPass';
import setAdmin from './setAdmin';
import signIn from './signIn';
import username from './setUsername';

export default combineReducers({
    response: getReducer,
    vehicle: getVehicle,
    newUser: createUser,
    allUsers: getUser,
    pass: setPass,
    admin: setAdmin,
    signin: signIn,
    user: username
});