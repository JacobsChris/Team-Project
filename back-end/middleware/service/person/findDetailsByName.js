const {Sequelize} = require('sequelize');
const wildStr = require('./wildStr.js');
const exactStr = require('./exactStr')
const auth = require('./sqlauth.js')
const {QueryTypes} = require('sequelize');

module.exports = {
    findDetailsByName: function findDetailsByName(forenames, surname, homeAddress,dateOfBirth,placeOfBirth, sex, limit) {
        if ((typeof forenames != 'string')||(typeof surname != 'string')||(typeof homeAddress != 'string')||(typeof placeOfBirth != 'string')||(typeof sex != 'string')) {
            console.log("Not string error");
        } else {
            forenames = wildStr.addWildStr(forenames);
            surname = wildStr.addWildStr(surname);
            homeAddress = wildStr.addWildStr(homeAddress);
            dateOfBirth = wildStr.addWildStr(dateOfBirth);
            placeOfBirth = wildStr.addWildStr(placeOfBirth);
            sex = exactStr.addExactStr(sex);

            let sqlSearchString = "SELECT * FROM citizen WHERE " +
                "forenames LIKE " + forenames +
                " AND surname LIKE " + surname +
                " AND homeAddress LIKE " + homeAddress +
                " AND dateOfBirth LIKE " + dateOfBirth +
                " AND placeOfBirth LIKE " + placeOfBirth +
                " AND sex=" + sex +
                " LIMIT " + limit;
            auth.SQLauthenticate(sqlSearchString)
        }
    }
};