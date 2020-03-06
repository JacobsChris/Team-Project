const wildStr = require('../inputvalidation/wildStr.js');
const findEPOSTransactions = require('./findEPOSTransactionsByBankCard');
const findATMTransactions = require('./findATMTransactionsByBankCard');

module.exports = {
    findTransactionsByBankCard: function findTransactionsByBankCard(cardNumber, limit) {
        if (typeof cardNumber != 'string') {
            console.log("Not string error");
        } else {
            cardNumber = wildStr.addWildStr(cardNumber);

            return Promise.all([findEPOSTransactions.findEPOSTransactions(cardNumber, limit), findATMTransactions.findATMTransactions(cardNumber, limit)]);
        }
    }
};