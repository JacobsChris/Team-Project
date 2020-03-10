const wildStr = require('../inputvalidation/wildStr.js');
const exactStr = require('../inputvalidation/exactStr');
const sendToAsyncCitizen = require('../sqlauth.js');
const person = require('../FindByPerson/findPersonByPerson.js');
const bankAccount = require('../FindByPerson/findBankAccountByPerson.js');
const mobilePhone = require('../FindByPerson/findMobileByPerson.js');
const veheicleReg = require('../FindByPerson/findVehicleByPerson.js');

module.exports = {
    /**
     *  @author Anthony Wilkinson & Chris
     *  @function this function obtains an input originally from a JSON, deconstructs the incomming data into citizenID,
     *  forenames, surname, homeAddress, dateOfBirth, Sex and a Limit which is hardcoded for the time being to be 5 total. The
     *  function then turns these input parameters into a MYSQL search string for sqlauth to querry the database. wildstr and
     *  exactstr allow for a LIKE or an exact match. The MYSQL string is constructed in the functions: findPersonByPerson,
     *  findBankAccountByPerson, findMobileByPerson, findVehicleByPerson. Those functions then send the constructed strings to
     *  mysql auth where it then querries the database (see mysql auth JSDocs for more info) and then returns it here. The
     *  promise.all waits for all querries from the database to be accompolished before returning the data, this returned data
     *  is within an array that takes the format [{person},{bank},{mobile},{vehicle}].
     *  @development there could be an intial execution of finding person, that the results of are then sent to bank, mobile and
     *  vehicle in the form =>
     *      promise.all([person]).then(res => promise.all([findBankAccountByPerson(res)...
     *
     *  the type of error needs a more accurate error statement
     *
     *  @return this function returns an array of JSON objects to be passed up
     *  @require this function to work it requires a JSON object to be passed into JsonToStringDetails()
     *  */
    findDetailsByName: function findDetailsByName(citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex) {
        // if ((typeof forenames != 'string') || (typeof surname != 'string') || (typeof homeAddress != 'string') || (typeof placeOfBirth != 'string') || (typeof sex != 'string')) {
        //     console.log("The entered inputs are not a string!" +
        //         "please make sure you've entered all the inputs correctly");
        //     throw new Error("Not string error")
        // } else {
            citizenID = wildStr.addWildStr(citizenID);
            forenames = wildStr.addWildStr(forenames);
            surname = wildStr.addWildStr(surname);
            homeAddress = wildStr.addWildStr(homeAddress);
            dateOfBirth = wildStr.addWildStr(dateOfBirth);
            placeOfBirth = wildStr.addWildStr(placeOfBirth);
            sex = wildStr.addWildStr(sex);

            return Promise.all([person.findPersonByPerson(citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex),
                bankAccount.findBankAccountByPerson(forenames, surname, homeAddress, dateOfBirth),
                mobilePhone.findMobileByPerson(forenames, surname, homeAddress, dateOfBirth),
                veheicleReg.findVehicleByPerson(forenames, surname, homeAddress, dateOfBirth)]);
        // }
    }
};