const findVehicleObs = require('./SqlConstructorForObs.js');
const licencePlateValidator = require('../inputvalidation/licencePlateValidator');
module.exports =
    /**
     *
     * @param vehicleRegistrationNumber
     * @returns returns promised information of the locations a vehicle of given licence plate has been sighted
     */
    function findVehicleLocationByVehicleReg(input) {
        try {
            let vehicleRegistrationNumber = licencePlateValidator(input.vehicleRegistrationNo);
            return Promise.all([findVehicleObs(vehicleRegistrationNumber)]);
        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occurred at find vehicle observations by vehicle');
        }
    };
