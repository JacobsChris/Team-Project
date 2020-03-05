const {Sequelize} = require('sequelize');
const wildStr = require('./inputvalidation/wildStr.js');
const exactStr = require('./inputvalidation/exactStr');
const auth = require('./sqlauth.js');
const {QueryTypes} = require('sequelize');

module.exports = {
    searchByNames: function searchByNames(citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex, limit) {
        if ((typeof forenames != 'string') || (typeof surname != 'string') || (typeof homeAddress != 'string') || (typeof placeOfBirth != 'string') || (typeof sex != 'string')) {
            console.log("Not string error");
        } else {
            citizenID = wildStr.addWildStr(citizenID);
            forenames = wildStr.addWildStr(forenames);
            surname = wildStr.addWildStr(surname);
            homeAddress = wildStr.addWildStr(homeAddress);
            dateOfBirth = wildStr.addWildStr(dateOfBirth);
            placeOfBirth = wildStr.addWildStr(placeOfBirth);

            if (sex == "") {
                sex = wildStr.addWildStr(sex);
            } else {
                sex = exactStr.addExactStr(sex);
            }


            let sqlSearchString = "SELECT * FROM citizen WHERE " +
                "citizenID LIKE " + citizenID +
                " AND forenames LIKE " + forenames +
                " AND surname LIKE " + surname +
                " AND homeAddress LIKE " + homeAddress +
                " AND dateOfBirth LIKE " + dateOfBirth +
                " AND placeOfBirth LIKE " + placeOfBirth +
                " AND sex LIKE " + sex +
                " LIMIT " + limit;
            return auth.SQLauthenticate(sqlSearchString)
        }
    }
};