const {Sequelize} = require('sequelize');
const wildStr = require('../inputvalidation/wildStr.js');
const exactStr = require('../inputvalidation/exactStr');
const sendToAsyncCitizen = require('../sqlauth.js');
const {QueryTypes} = require('sequelize');
const bankAccount = require('../FindByPerson/findBankAccountByPerson.js')

module.exports = {
    findDetailsByName: function findDetailsByName(citizenID,forenames, surname, homeAddress,dateOfBirth,placeOfBirth, sex, limit) {
        if ((typeof forenames != 'string')||(typeof surname != 'string')||(typeof homeAddress != 'string')||(typeof placeOfBirth != 'string')||(typeof sex != 'string')) {
            console.log("Not string error");
        } else {
            citizenID = wildStr.addWildStr(citizenID);
            forenames = wildStr.addWildStr(forenames);
            surname = wildStr.addWildStr(surname);
            homeAddress = wildStr.addWildStr(homeAddress);
            dateOfBirth = wildStr.addWildStr(dateOfBirth);
            placeOfBirth = wildStr.addWildStr(placeOfBirth);
            sex = wildStr.addWildStr(sex);

            let sqlSearchStringCitizen = "SELECT * FROM citizen WHERE " +
                "citizenID LIKE " + citizenID +
                " AND forenames LIKE " + forenames +
                " AND surname LIKE " + surname +
                " AND homeAddress LIKE " + homeAddress +
                " AND dateOfBirth LIKE " + dateOfBirth +
                " AND placeOfBirth LIKE " + placeOfBirth +
                " AND sex LIKE " + sex +
                " LIMIT " + limit;

            let sqlSearchStringMobiles = "SELECT * FROM mobiles WHERE " +
                "forenames LIKE " + forenames +
                " AND surname LIKE " + surname +
                " AND address LIKE " + homeAddress +
                " AND dateOfBirth LIKE " + dateOfBirth +
                " LIMIT " + limit;

            let sqlSearchStringvehicleRegistration = "SELECT * FROM vehicleRegistration WHERE " +
                "forenames LIKE " + forenames +
                " AND surname LIKE " + surname +
                " AND address LIKE " + homeAddress +
                " AND dateOfBirth LIKE " + dateOfBirth +
                " LIMIT " + limit;

            let sqlSearchStringBankAccount = "SELECT * FROM peoplebankaccount WHERE" +
                " forenames LIKE " + forenames +
                " AND surname LIKE " + surname +
                " AND homeAddress LIKE " + homeAddress +
                " AND dateOfBirth LIKE " + dateOfBirth +
                " LIMIT " + limit;


            return Promise.all([sendToAsyncCitizen.SQLauthenticate(sqlSearchStringCitizen),
                sendToAsyncCitizen.SQLauthenticate(sqlSearchStringBankAccount),
                sendToAsyncCitizen.SQLauthenticate(sqlSearchStringMobiles),
                sendToAsyncCitizen.SQLauthenticate(sqlSearchStringvehicleRegistration)]);
        }
    }
};