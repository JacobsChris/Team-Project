import { combineReducers } from 'redux';
import createUser from './createUser';
import getUser from './getUser';
import setPass from './setPass';
import setAdmin from './setAdmin';
import signIn from './signIn';
import username from './setUsername';

export default combineReducers({
    newUser: createUser,
    allUsers: getUser,
    pass: setPass,
    admin: setAdmin,
    signin: signIn,
    user: username
});