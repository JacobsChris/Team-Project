import { combineReducers } from 'redux';
import getReducer from './getReducer'; 
import getUser from './getUser';

export default combineReducers({
    response: getReducer,
    user: getUser
});