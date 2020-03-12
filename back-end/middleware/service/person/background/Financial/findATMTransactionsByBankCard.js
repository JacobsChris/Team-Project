const auth = require('../sqlauth.js');

module.exports =
    /**
     * @author Anthony Wilkinson & Chris
     *
     * @function this function takes an input from the function findTransactionsByBankCard comprised of which is the atmId
     * and the limit which is hardcoded for the moment
     *
     * The function then constructs a string for the MYSQL query to the database through SQLauthenticate (see mysql auth JSDocs
     * for more info) and then returns it here.
     *
     * This is then passed up to findTransactionsByBankCard
     *
     * @return this returns a JSON object from the MYSQL database
     *
     * @requires this function requires a string input selected from findTransactionsByBankCard to function
     * */
    function findATMTransactions(input) {
        let sqlSearchString = "SELECT * FROM atmTransaction WHERE " +
            " bankCardNumber =(" + input.cardNumber + ")";
        return auth(sqlSearchString);
};
