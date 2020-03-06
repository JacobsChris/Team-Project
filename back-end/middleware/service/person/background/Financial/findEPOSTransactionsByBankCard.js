const auth = require('../sqlauth.js');

module.exports = {
    findEPOSTransactions: function findEPOSTransactions(cardNumber, limit) {
        let sqlSearchString = "SELECT * FROM eposTransactions WHERE "+
            " bankCardNumber LIKE " + cardNumber +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};
