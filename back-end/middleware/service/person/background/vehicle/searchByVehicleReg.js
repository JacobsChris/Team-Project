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
    function searchByVehicleReg(input) {
        input = licencePlateValidator(input.vehicleRegistrationNo);
        let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE " +
            "vehicleRegistrationNo LIKE " + input;
        return Promise.all([auth(sqlSearchString)]);

    };
