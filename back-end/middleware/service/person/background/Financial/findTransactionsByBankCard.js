const findEPOSTransactions = require('./findEPOSTransactionsByBankCard');
const findATMTransactions = require('./findATMTransactionsByBankCard');

module.exports =
 /**
 *  @author Anthony Wilkinson & Chris
 *  @function this function obtains an input originally from a JSON, deconstructs the incoming data into bankcardId,
 *  cardNumber, sortCode, bankAccountId, accountNumber, bank and a Limit which is hardcoded for the time being
 *  to be 5 total.
 *  @development A continuation of the @development from findDetailsByName
 *
 *  @return this function returns an array of JSON objects to be passed up
 *
 *  @require this function to work it requires a JSON object to be passed into JsonToStringTransactions()
 *  */
function (input) {
    return Promise.all([findEPOSTransactions(input), findATMTransactions(input)]);
};