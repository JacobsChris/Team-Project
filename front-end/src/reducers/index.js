import { combineReducers } from 'redux';
import getReducer from './getReducer'; 

export default combineReducers({
    response: getReducer
});