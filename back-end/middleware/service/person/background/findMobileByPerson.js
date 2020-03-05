import {SQLauthenticate} from "./sqlauth";

module.exports = {
    findMobileByPerson: function findMobileByPerson(forenames, surname, DoB, Addr, limit) {
        let sqlSearchString = "SELECT phoneNumber FROM mobile WHERE forenames LIKE \'" + forenames + "\' AND surname LIKE \'" + surname + "\' AND address LIKE \'" + Addr + "\' AND dateOfBirth LIKE \'" + DoB + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }
};
