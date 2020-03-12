const findVehicleObs = require('./SqlConstructorForObs.js');
const licencePlateValidator = require('../inputvalidation/licencePlateValidator');
module.exports =
    /**
     *
     * @param vehicleRegistrationNumber
     * @returns returns promised information of the locations a vehicle of given licence plate has been sighted
     */
     function findVehicleLocationByVehicleReg(vehicleRegistrationNumber) {
        vehicleRegistrationNumber = licencePlateValidator(vehicleRegistrationNumber);
        return Promise.all([findVehicleObs(vehicleRegistrationNumber)]);
};
