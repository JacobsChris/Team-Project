import {SQLauthenticate} from "./sqlauth";

module.exports = {
    searchByVehicleReg: function findEPOSTransactions(cardNumber, limit) {
        let sqlSearchString = "SELECT * FROM eposTransactions WHERE bankCardNumber LIKE \'" + cardNumber + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
}