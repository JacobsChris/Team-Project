import { SET_USERNAME } from './types';
import axios from 'axios';
import store from '../store';

export const setUsername = (name) => dispatch => {

    console.log(name);
    
            dispatch({
                type: SET_USERNAME,
                payload: name
            })
};

