const searchByVehicleReg = require("../../../../../../back-end/middleware/service/person/background/vehicle/searchByVehicleReg");

let initRes = [];
let expectedResult = {
    "address": "9 OFFERTON ROAD, STOCKPORT, SK7 4NJ",
    "colour": "red",
    "dateOfBirth": "1993-11-09",
    "driverLicenceID": "MILLE911093GL9GN 28",
    "forenames": "Gerard Leon",
    "make": "Volkswagen",
    "model": "Polo",
    "registrationDate": "2000-12-20",
    "registrationID": 10227,
    "surname": "Miller",
    "vehicleRegistrationNo": "JL20 DEX",
};

let inputVehicleCompleteReg = {
    "vehicleRegistrationNo": "JL20 DEX"
};

let inputVehicleInCompleteReg = {
    "vehicleRegistrationNo": "JL2_ ___"
};

let inputVehicleInvalidReg = {
    "vehicleRegistrationNo": "1234 DEX"
};


test('takes in a valid complete vehicleReg and searches for vehicles', (done) => {
    jest.setTimeout(10000000);
    searchByVehicleReg(inputVehicleCompleteReg, 1)
        .then(([vehicle]) => {
            initRes = vehicle;
            expect(initRes).toEqual(expectedResult);
            done();
        });
});

test('takes in a valid incomplete vehicleReg and searches for vehicles', (done) => {
    searchByVehicleReg(inputVehicleInCompleteReg)
        .then(([vehicle]) => {
            initRes = vehicle;
            expect(initRes).toContainEqual.toString((expectedResult));
            done();
        });
});

test('takes in an invalid regNo and returns an error', (done) => {
    jest.setTimeout(10000)
    searchByVehicleReg(inputVehicleInvalidReg)
        .then(() => console.log("nope"))
        .catch(err => {
            expect(err).toEqual(new Error("Error occurred on search by vehicle reg."));
            done();
        });
});

