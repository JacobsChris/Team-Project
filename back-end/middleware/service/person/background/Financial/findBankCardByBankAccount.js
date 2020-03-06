const auth = require('../sqlauth.js');

module.exports = {
    findBankCard: function findBankCard(bankAccountId, limit) {
        let sqlSearchString = "SELECT * FROM bankcard WHERE " +
            "bankAccountId LIKE " + bankAccountId +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};
