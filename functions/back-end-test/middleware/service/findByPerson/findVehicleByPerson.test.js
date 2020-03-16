const findVehicleByPerson = require("../../../../back-end/middleware/service/FindByPerson/findVehicleByPerson");

let inputVal = {
    "forenames": "Gillian Kathryn",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": ""
};

let outputVal = {
    "address": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
    "colour": "red",
    "dateOfBirth": "1952-03-06",
    "driverLicenceID": "NEWTO553062GK9YW 82",
    "forenames": "Gillian Kathryn",
    "make": "Mini",
    "model": "One",
    "registrationDate": "1995-12-02",
    "registrationID": 5281,
    "surname": "Newton",
    "vehicleRegistrationNo": "TM15 WJL"
};

test('test that a vehicle is found from person details', (done) => {
    findVehicleByPerson(inputVal).then(([vehicle]) => {
        expect(vehicle).toStrictEqual(outputVal);
        done();
    })
});
