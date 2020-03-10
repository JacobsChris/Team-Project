const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = [
    [
        {
            "atmId": 4,
            "latitude": 51.7045445304116,
            "longitude": -0.612916592575059,
            "operator": "Clydesdale Bank",
            "postcode": "HP5 1FE",
            "streetName": "East Street"
        }
    ]
];

let inputTransaction = {
    "timestamp": "",
    "atmId": "4",
    "bankcardNumber": "",
    "type": "",
    "amount": ""
};


test('finds ATM transactions by bank card', (done) => {
    mainSearch.JsonToStringATM(inputTransaction)
        .then((ATMPoint) => {
            initRes = ATMPoint;
            expect(initRes).toStrictEqual(expectedResult);
            console.log("Advanced Detail ATMPoint", ATMPoint);
            done();
        });
});