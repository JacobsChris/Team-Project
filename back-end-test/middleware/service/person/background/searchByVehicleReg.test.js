const mainSearch = require("../../../../../back-end/middleware/service/person/mainSearch");

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
    mainSearch.JsonToVehicleByReg(inputVehicleCompleteReg, 1)
        .then(([vehicle]) => {
            console.log("Advanced Detail Search in order of vehicle"
                , vehicle);
            initRes = vehicle;
            console.log(initRes);
            expect(initRes).toContainEqual(expectedResult);
            done();
        });
    // done()
});

test('takes in a valid incomplete vehicleReg and searches for vehicles', (done) => {
    mainSearch.JsonToVehicleByReg(inputVehicleInCompleteReg)
        .then(([vehicle]) => {
            console.log("Advanced Detail Search in order of vehicle"
                , vehicle);
            initRes = vehicle;
            console.log(initRes);
            expect(initRes).toStrictEqual(expectedResult);
            done();
        });
});

test('takes in an invalid regNo and returns an error', (done) => {
    expect(() => {
        mainSearch.JsonToVehicleByReg(inputVehicleInvalidReg)
            .then(([vehicle]) => {
                console.log("Advanced Detail Search in order of vehicle"
                    , vehicle);
                initRes = vehicle;
                done();
            });
    }).toThrow("Not a valid vehicle registration number");
    done();
});

