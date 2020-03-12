const findVehicleObsByVehicle = require("../../../../../../back-end/middleware/service/person/background/vehicle/findVehicleObsByVehicle");

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


let inCompleteInputReg = {
    "vehicleRegistrationNo": "IU22 HF_"
};


test("takes in a valid complete vehicle reg and returns all observations of that vehicle", (done) => {
    jest.setTimeout(1000000);
    findVehicleObsByVehicle(inputReg)
        .then(([observations]) => {
            initRes = observations;
            expect(initRes.toString()).toContain(expectedResult.toString());
            done();
        })
});


let inValidInputReg = {
    "vehicleRegistrationNo": "IU2"
};
test("takes in an invalid complete vehicle reg and returns all observations of that vehicle", async () => {
    try {
        await findVehicleObsByVehicle(inValidInputReg);
        throw "this shouldn't have got here"
    } catch (err) {
        expect(err).toBeTruthy();
        expect(err.message).toEqual("Not a valid vehicle registration number")
    }
});

test("takes in a valid incomplete vehicle reg and returns all observations of that vehicle", (done) => {
    jest.setTimeout(1000000);
    findVehicleObsByVehicle(inCompleteInputReg)
        .then(([observations]) => {
            initRes = observations;
            expect(initRes.toString()).toContain(expectedResult.toString());
            done();
        })
});