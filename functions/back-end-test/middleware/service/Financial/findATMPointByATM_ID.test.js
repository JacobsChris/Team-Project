const findATMPointByATM_ID = require("../../../../back-end/middleware/service/Financial/findATMPointByATM_ID");

let expectedResult = [
    {
        "atmId": 4,
        "latitude": 51.7045445304116,
        "longitude": -0.612916592575059,
        "operator": "Clydesdale Bank",
        "postcode": "HP5 1FE",
        "streetName": "East Street"
    }
];

let inputVal = 4;


test('finds ATM transactions by bank card', (done) => {
    findATMPointByATM_ID(inputVal)
        .then((ATMPoint) => {
            expect(ATMPoint).toStrictEqual(expectedResult);
            done();
        });
});