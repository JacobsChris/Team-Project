const auth = require('../sqlauth.js');
const wildStr = require("../inputvalidation/wildStr");

module.exports = /**
 * @author Anthony Wilkinson & Chris
 *
 * @function this function takes an input from the function findDetailsByName comprised of which is the forenames,
 * surname, Address, dateOfBirth, placeOfBirth, sex and the limit which is hardcoded for the moment
 *
 * The function then constructs a string for the MYSQL query to the database through SQLauthenticate (see mysql auth JSDocs
 * for more info) and then returns it here.
 *
 * This is then passed up to findDetailsByName
 *
 * @development this function can hopefully be made redundant look at @development for findDetailsByName
 *
 * @return this returns a JSON object from the MYSQL database
 *
 * @requires this function requires string inputs selected from findDetailsByName to function
 * */
function findPersonByPerson(input) {
    try {
        let sqlSearchString = "SELECT * FROM citizen WHERE " +
            "citizenID LIKE " + wildStr(input.citizenID) +
            " AND forenames LIKE " + wildStr(input.forenames) +
            " AND surname LIKE " + wildStr(input.surname) +
            " AND homeAddress LIKE " + wildStr(input.homeAddress) +
            " AND dateOfBirth LIKE " + wildStr(input.dateOfBirth) +
            " AND placeOfBirth LIKE " + wildStr(input.placeOfBirth) +
            " AND sex LIKE " + wildStr(input.sex);

        return auth(sqlSearchString);
    } catch (e) {
        console.info(e);
        console.info(e.name);
        console.info(e.message);
        throw new Error('error occured at find Person by person');
    }

};
