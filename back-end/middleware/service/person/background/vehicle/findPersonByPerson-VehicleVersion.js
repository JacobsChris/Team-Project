// const auth = require('../sqlauth.js');
//
// module.exports =
//     /**
//      * @author Anthony Wilkinson & Chris
//      *
//      * @function this function takes an input from the function findDetailsByName comprised of which is the forenames,
//      * surname, Address, dateOfBirth, placeOfBirth, sex and the limit which is hardcoded for the moment
//      *
//      * The function then constructs a string for the MYSQL query to the database through SQLauthenticate (see mysql auth JSDocs
//      * for more info) and then returns it here.
//      *
//      * This is then passed up to findDetailsByName
//      *
//      * @development this function can hopefully be made redundant look at @development for findDetailsByName
//      *
//      * @return this returns a JSON object from the MYSQL database
//      *
//      * @requires this function requires string inputs selected from findDetailsByName to function
//      * */
//      function findPersonByPerson(forenames, surname, address, dateOfBirth) {
//         let sqlSearchString = "SELECT * FROM citizen WHERE " +
//             " forenames LIKE " + forenames +
//             " AND surname LIKE " + surname +
//             " AND homeAddress LIKE " + address +
//             " AND dateOfBirth LIKE " + dateOfBirth;
//         return auth.SQLauthenticate(sqlSearchString);
//
// };
//TODO check if safe to delete
