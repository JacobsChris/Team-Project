import {SQLauthenticate} from "../sqlauth";

module.exports = {
    findATMTransactions: function findATMTransactions(cardNumber, limit) {
        let sqlSearchString = "SELECT * FROM atmTransaction WHERE bankCardNumber LIKE \'" + cardNumber + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }
};