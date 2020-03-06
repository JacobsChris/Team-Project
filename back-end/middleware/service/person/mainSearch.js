const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_citi_details/findDetailsByName.js');


module.exports = {
    JsonToStringName: function JsonToStringName(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
    },
    JsonToStringDetails: function JsonToStringDetails(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);

    }
};


function JsonToStringDetails(input) {
    return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);

}

JsonToStringDetails(
    {
        "citizenID": "",
        "forenames": "Stuart",
        "surname": "White",
        "homeAddress": "46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG",
        "dateOfBirth": "1948-10-02",
        "placeOfBirth": "STANMORE",
        "sex": "Male"
    }
).then(([Citizen, BankAccount, Mobiles, vehicle]) => {
    console.log("Advanced Detail Search in order of citizen, bank account, mobile and vehicle = ", Citizen, BankAccount, Mobiles, vehicle);
});


