import {SQLauthenticate} from "../sqlauth";

module.exports = {
    findEPOSTransactions: function findEPOSTransactions(cardNumber, limit) {
        let sqlSearchString = "SELECT * FROM eposTransactions WHERE bankCardNumber LIKE \'" + cardNumber + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }
};