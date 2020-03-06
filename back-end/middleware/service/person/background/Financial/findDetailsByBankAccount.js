
const wildStr = require('../inputvalidation/wildStr.js');
const bankCard = require('./findBankCardByBankAccount')



module.exports = {
    findBankCardByAccountId: function findBankCardByAccountId(bankAccountId,accountNumber, bank, forenames,surname,dateOfBirth, homeAddress, limit) {
        if ((typeof bankAccountId != 'string')||(typeof accountNumber != 'string')||(typeof bank != 'string')||(typeof forenames != 'string')||(typeof surname != 'string')||(typeof dateOfBirth != 'string')||(typeof homeAddress != 'string')) {
            console.log("Not string error");
        } else {
            bankAccountId = wildStr.addWildStr(bankAccountId);
            accountNumber = wildStr.addWildStr(accountNumber);
            bank = wildStr.addWildStr(bank);
            forenames = wildStr.addWildStr(forenames);
            surname = wildStr.addWildStr(surname);
            dateOfBirth = wildStr.addWildStr(dateOfBirth);
            homeAddress = wildStr.addWildStr(homeAddress);

            return Promise.all([bankCard.findBankCard(bankAccountId,limit)]);
        }
    }
};