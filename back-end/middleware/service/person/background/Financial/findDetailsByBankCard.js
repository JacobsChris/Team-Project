
const wildStr = require('../inputvalidation/wildStr.js');
const findEPOSTransactions = require('./findEPOSTransactionsByBankCard');
const findATMTransactions = require('./findATMTransactionsByBankCard');

module.exports = {
    findBankCardByBankCard: function findBankCardByBankCard(bankcardId, cardNumber, sortCode, bankAccountId, accountNumber, bank, limit) {
        if ((typeof bankAccountId != 'string')||(typeof cardNumber != 'string')||(typeof sortCode != 'string')||(typeof bankAccountId != 'string')||(typeof accountNumber != 'string')||(typeof bank != 'string')) {
            console.log("Not string error");
        } else {
            bankcardId = wildStr.addWildStr(bankcardId);
            cardNumber = wildStr.addWildStr(cardNumber);
            sortCode = wildStr.addWildStr(sortCode);
            bankAccountId = wildStr.addWildStr(bankAccountId);
            accountNumber = wildStr.addWildStr(accountNumber);
            bank = wildStr.addWildStr(bank);

            return Promise.all([findEPOSTransactions.findEPOSTransactions(cardNumber,limit),findATMTransactions.findATMTransactions(cardNumber,limit)]);
        }
    }
};