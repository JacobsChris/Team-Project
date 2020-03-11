const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = [
    {
        "ANPRPointId": 5538,
        "stamptime": "2015-05-01T09:08:52.000Z",
        "vehicleRegistrationNumber": "IU22 HFF"
    },
    {
        "ANPRPointId": 5538,
        "stamptime": "2015-05-01T09:08:52.000Z",
        "vehicleRegistrationNumber": "IU22 HFF"
    }
];

let inputReg = {
    "vehicleRegistrationNo": "IU22 HFF"
};

let inValidInputReg = {
    "vehicleRegistrationNo": "IU2"
};

let inCompleteInputReg = {
    "vehicleRegistrationNo": "IU22 HF_"
};


test("takes in a valid complete vehicle reg and returns all observations of that vehicle", (done) => {
    jest.setTimeout(1000000);
    mainSearch.JsonToStringVehicleObs(inputReg)
        .then(([observations]) => {
            initRes = observations;
            expect(initRes.toString()).toContain(expectedResult.toString());
            done();
        })
});

test("takes in an invalid complete vehicle reg and returns all observations of that vehicle", (done) => {
    jest.setTimeout(1000000);
    expect(() => {
        mainSearch.JsonToStringVehicleObs(inValidInputReg)
    }).toThrow("Not a valid vehicle registration number")
});

test("takes in a valid incomplete vehicle reg and returns all observations of that vehicle", (done) => {
    jest.setTimeout(1000000);
    mainSearch.JsonToStringVehicleObs(inCompleteInputReg)
        .then(([observations]) => {
            initRes = observations;
            expect(initRes.toString()).toContain(expectedResult.toString());
            done();
        })
});