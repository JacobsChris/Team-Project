const findVehicleObs = require('./SqlConstructorForObs.js');
const licencePlateValidator = require('../inputvalidation/licencePlateValidator');
module.exports = {
    // /**
    //  *  @author Anthony Wilkinson & Chris
    //  *  @function this function obtains an input originally from a JSON, deconstructs the incomming data into timestamp,
    //  *  atmId, bankCardNumber, type, amount, limit and a Limit which is hardcoded for the time being
    //  *  to be 5 total.
    //  *
    //  *  the if typeof statement ensures that all inputs are of a type string otherwise a string error occurs. If the input
    //  *  is of type string the rest of the function occurs.
    //  *
    //  *  The function then turns these input parameters into a MYSQL search string for sqlauth to querry the database.
    //  *  wildstr and exactstr allow for a LIKE or an exact match. The MYSQL string is constructed in the function:
    //  *  findATMPoint.
    //  *
    //  *  Those functions then send the constructed strings to mysql auth where it then querries the database
    //  *  (see mysql auth JSDocs for more info) and then returns it here.
    //  *
    //  *  The promise.all waits for all querries from the database to be accompolished before returning the data,
    //  *  this returned data is within an array that takes the format [{ATMPoint}].
    //  *
    //  *  @development A continuation of the @development from findDetailsByName
    //  *
    //  *  @return this function returns an array of a JSON object to be passed up
    //  *
    //  *  @require this function to work it requires a JSON object to be passed into JsonToStringATM()
    //  *  */
    findVehicleLocationByVehicleReg: function findVehicleLocationByVehicleReg(vehicleRegistrationNumber) {
        vehicleRegistrationNumber = licencePlateValidator.licencePlateValidator(vehicleRegistrationNumber);
            return Promise.all([findVehicleObs.findVehicleObs(vehicleRegistrationNumber)]);
    }
};
