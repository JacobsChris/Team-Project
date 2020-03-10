const auth = require('../sqlauth.js');

module.exports = {
    /**
     * @author Anthony Wilkinson & Chris
     *
     * @function this function takes an input from the function findDetailsByName comprised of which is the forenames,
     * surname, dateOfBirth, Address and the limit which is hardcoded for the moment
     *
     * The function then constructs a string for the MYSQL query to the database through SQLauthenticate (see mysql auth JSDocs
     * for more info) and then returns it here.
     *
     * This is then passed up to findDetailsByName
     *
     * @return this returns a JSON object from the MYSQL database
     *
     * @requires this function requires string inputs selected from findDetailsByName to function
     * */
    findBankAccountByPerson: function findPersonsBankAccount(forenames, surname, Addr, DoB) {
        let sqlSearchString = "SELECT * FROM peoplebankaccount WHERE" +
            " forenames LIKE " + forenames +
            " AND surname LIKE " + surname +
            " AND homeAddress LIKE " + Addr +
            " AND dateOfBirth LIKE " + DoB;
        return auth.SQLauthenticate(sqlSearchString);
    }
};