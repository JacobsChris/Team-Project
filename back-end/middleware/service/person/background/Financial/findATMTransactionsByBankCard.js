const auth = require('../sqlauth.js');

module.exports = {
    findATMTransactions: function findATMTransactions(cardNumber, limit) {
        let sqlSearchString = "SELECT * FROM atmTransaction WHERE " +
            " bankCardNumber LIKE " + cardNumber +
            " LIMIT " + limit;
        return auth.SQLauthenticate(sqlSearchString)
    }
};
