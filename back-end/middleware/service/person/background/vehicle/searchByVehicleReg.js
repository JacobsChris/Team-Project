const auth = require('../sqlauth.js');
const licencePlateValidator = require("../inputvalidation/licencePlateValidator");

module.exports =
    /**
     * @author  chris
     *
     * @function this function takes in an input
     *
     *  @return this function returns an JSON object to be passed up
     *
     *  @require this function to work it requires a JSON object to be passed into JsonToStringName()
     * */
    async function searchByVehicleReg(input,limit) {
        try {
            if (input.vehicleRegistrationNo) {
                input = licencePlateValidator(input.vehicleRegistrationNo);
            } else if (input.vehicleRegistrationNumber) {
                input = licencePlateValidator(input.vehicleRegistrationNumber);
            }
            if (input !== undefined) {
                if (limit !== undefined) {
                    let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE " +
                        "vehicleRegistrationNo LIKE " + input + " limit " + limit;
                    return await auth(sqlSearchString);
                } else {
                    let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE " +
                        "vehicleRegistrationNo LIKE " + input + " limit 10000";
                    return await auth(sqlSearchString);
                }
            } else {
                return [];
            }
        }
        catch (e) {
            throw "error occured on search by vehicle reg"
        }

    }
;
