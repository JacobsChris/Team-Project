
const wildStr = require('../inputvalidation/wildStr.js');
const bankCard = require('./findBankCardByBankAccount');



module.exports = {
    findBankCardByAccountId: function findBankCardByAccountId(bankAccountId,accountNumber,bank,forenames,forenames,dateOfBirth,homeAddress,limit) {
        if (typeof bankAccountId != 'string') {
            console.log("Not string error");
        } else {
            bankAccountId = wildStr.addWildStr(bankAccountId);


            return Promise.all([bankCard.findBankCard(bankAccountId, limit)]);
        }
    }
};