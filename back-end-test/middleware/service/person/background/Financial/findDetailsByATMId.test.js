const findDetailsByATMId = require("../../../../../../back-end/middleware/service/person/background/Financial/findDetailsByATMId");

let inputVTimeStamp = "2015-05-01 14:37:26";
let inputATMID = "1926";

let outputVal = [
    [
        {
            "atmId": 1926,
            "latitude": 51.5141356763228,
            "longitude": -0.301483576562607,
            "operator": "Clydesdale Bank",
            "postcode": "B455",
            "streetName": "The Broadway"
        }
    ]
];

test('Test that details are found by atm ID', (done) => {
    findDetailsByATMId(inputVTimeStamp, inputATMID).then((atmPoint) => {
        expect(atmPoint).toStrictEqual(outputVal);
        done();
    });
});