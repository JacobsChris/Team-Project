const auth = require('../sqlauth.js');

module.exports = {
    /**
     * @author Anthony Wilkinson & Chris
     *
     * @function this function takes an input from the function findDetailsByBankAccount comprised of which is the bankAccountId
     * and the limit which is hardcoded for the moment
     *
     * The function then constructs a string for the MYSQL query to the database through SQLauthenticate (see mysql auth JSDocs
     * for more info) and then returns it here.
     *
     * This is then passed up to findDetailsByBankAccount
     *
     * @return this returns a JSON object from the MYSQL database
     *
     * @requires this function requires a string input selected from findDetailsByBankAccount to function
     * */
    findDetailsFromABankAccountId: function findDetailsFromABankAccountId(bankAccountId,limit) {
        if (limit !==undefined) {
        }
        else {
            limit = 1000;
        }
        let sqlSearchString = "SELECT * FROM peoplebankaccount WHERE " +
            "bankAccountId LIKE " + bankAccountId +
            " Limit " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};