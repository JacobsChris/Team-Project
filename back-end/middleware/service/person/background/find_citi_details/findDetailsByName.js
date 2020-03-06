
const wildStr = require('../inputvalidation/wildStr.js');
const exactStr = require('../inputvalidation/exactStr');
const sendToAsyncCitizen = require('../sqlauth.js');
const bankAccount = require('../FindByPerson/findBankAccountByPerson.js')
const mobilePhone = require('../FindByPerson/findMobileByPerson.js')
const veheicleReg = require('../FindByPerson/findVehicleByPerson.js')

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
            sex = exactStr.addExactStr(sex);

            let sqlSearchStringCitizen = "SELECT * FROM citizen WHERE " +
                "citizenID LIKE " + citizenID +
                " AND forenames LIKE " + forenames +
                " AND surname LIKE " + surname +
                " AND homeAddress LIKE " + homeAddress +
                " AND dateOfBirth LIKE " + dateOfBirth +
                " AND placeOfBirth LIKE " + placeOfBirth +
                " AND sex LIKE " + sex +
                " LIMIT " + limit;


            return Promise.all([sendToAsyncCitizen.SQLauthenticate(sqlSearchStringCitizen),
                bankAccount.findBankAccountByPerson(forenames,surname,homeAddress,dateOfBirth,limit),
                mobilePhone.findMobileByPerson(forenames,surname,homeAddress,dateOfBirth,limit),
                veheicleReg.findVehicleByPerson(forenames,surname,homeAddress,dateOfBirth,limit)]);
        }
    }
};