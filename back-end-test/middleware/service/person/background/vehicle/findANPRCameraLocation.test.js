const findANPRCameraLocation = require("../../../../../../back-end/middleware/service/person/background/vehicle/findANPRCameraLocation");

let initRes = [];
let expectedRes = [{
    "anprId": 1,
    "latitude": 55.87491294462039,
    "longitude": -4.2803077983925,
    "streetName": "Kelvin Bridge, A82"
}];

let inputVal = {
        "ANPRPointId": "1"
    }
;

test("Takes in an object with ANPR ID as a keypair, and returns information about the ANPR Camera of that ID", (done) => {
    findANPRCameraLocation(inputVal)
        .then(([ANPRCamLoc]) => {
            initRes = ANPRCamLoc;
            expect(initRes).toStrictEqual(expectedRes);
            done()
        })
});