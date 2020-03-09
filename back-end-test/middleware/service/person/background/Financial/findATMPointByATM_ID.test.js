const mainSearch = require("../../../../../../back-end/middleware/service/person/mainSearch");

let initRes = [];
let expectedResult = [
    [
        {
            "atmId": 0,
            "latitude": 51.7949824829048,
            "longitude": -0.814638153533918,
            "operator": "Bank of England",
            "postcode": "HP21 9YL",
            "streetName": "Old Burrs"
        },
        {
            "atmId": 1,
            "latitude": 51.8272386376102,
            "longitude": -0.843655886492707,
            "operator": "Nationwide Building Society",
            "postcode": "HP19 8LG",
            "streetName": "Bronte Close"
        },
        {
            "atmId": 2,
            "latitude": 51.7063787670594,
            "longitude": -0.612093423398535,
            "operator": "Santander UK",
            "postcode": "HP5 1DD",
            "streetName": "Blucher Street"
        },
        {
            "atmId": 3,
            "latitude": 51.7045445304116,
            "longitude": -0.612916592575059,
            "operator": "HSBC Bank",
            "postcode": "HP5 1FE",
            "streetName": "East Street"
        },
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


let inputBankCard = {
    "timestamp": "",
    "atmId": "",
    "bankcardNumber": "9848712956998436",
    "type": "",
    "amount": ""
};


test('finds ATM transactions by atm', (done) => {
    mainSearch.JsonToStringATM(inputBankCard)
        .then((ATMPoint) => {
            initRes = ATMPoint;
            expect(initRes).toStrictEqual(expectedResult);
            console.log("Advanced Detail ATMPoint", ATMPoint);
            done();
        });
});