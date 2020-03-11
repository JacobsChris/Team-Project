import { GET_PEOPLE } from './types';
import { encodeQueryParams, stringify, StringParam } from 'serialize-query-params';
import axios from 'axios';

export const getPeople = (searchData) => dispatch => {

    console.log(searchData);
    axios.post('http://localhost:8080/back-end/person/getData?' + stringify(encodeQueryParams({
        citizenID: StringParam, forenames: StringParam, surname: StringParam, homeAddress: StringParam,
        dateOfBirth: StringParam, placeOfBirth: StringParam, sex: StringParam
    }, searchData)), {
        headers: {
            Authorization: sessionStorage.jwt
          }
    })
        .then(response =>
            dispatch({
                type: GET_PEOPLE,
                payload: response
            }))
};

