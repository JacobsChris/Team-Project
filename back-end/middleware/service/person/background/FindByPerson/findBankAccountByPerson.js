import {SQLauthenticate} from "./sqlauth";

module.exports = {
    findBankAccountByPerson: function findPersonsBankAccount(forenames, surname, DoB, Addr, limit) {
        let sqlSearchString = "SELECT * FROM peoplebankaccount WHERE forenames LIKE \'" + forenames + "\' AND surname LIKE \'" + surname + "\' AND address LIKE \'" + Addr + "\' AND dateOfBirth LIKE \'" + DoB + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
        // returns a persons bank account
    }
};