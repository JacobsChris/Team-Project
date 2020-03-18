const searchLocationsByIdAndTime = require("../../../../back-end/middleware/service/LocationSearch/searchLocationsByIdAndTime");


let inputValAnprAndEposIDOneRequest = {
    anprId:
        [{
            anprId: 1130,
            streetName: 'A5',
            latitude: 51.99191686492973,
            longitude: -0.6983792565400733
        },
            {
                anprId: 3234,
                streetName: 'A5',
                latitude: 52.004523061316974,
                longitude: -0.7101314301073126
            }],
    atmId: [],
    cellTowerID: [],
    eposId:
        [{
            id: 103,
            vendor: 'Bow Brickhill',
            streetName: 'Brickhill Street, V10',
            postcode: 'MK17 9FH',
            latitude: 52.0046079218233,
            longitude: -0.695675437096732
        },
            {
                id: 256,
                vendor: 'Red Lion',
                streetName: 'Lock View Lane',
                postcode: 'MK1 1BY',
                latitude: 52.0010366812786,
                longitude: -0.714454986366195
            },
            {
                id: 894,
                vendor: 'Hunters Farm Shop',
                streetName: 'A5',
                postcode: 'MK17 9DN',
                latitude: 51.9921995290974,
                longitude: -0.69929857257226
            },
            {
                id: 939,
                vendor: 'Dobbies Garden World',
                streetName: 'Belvedere Lane',
                postcode: 'MK17 9JH',
                latitude: 51.9975987787286,
                longitude: -0.709338657946343
            }]
};

let intialTimeStampInput = "2015-05-01 14:08:52";
let finalTimeStampInput = "2015-05-21 14:12:52";
let smalllimit = 1;
let biglimit = 2;

let expectedValCelltowerIDOneRequest = {
    "eventIdTimeAndDetails": [{
        "registrationID": 383661,
        "registrationDate": "2003-05-14",
        "vehicleRegistrationNo": "UT60 CCV",
        "make": "Ford",
        "model": "Focus",
        "colour": "red",
        "forenames": "Sandra Kim",
        "surname": "Curtis",
        "address": "106 DUNSMORE ROAD, LUTON, LU1 5JZ",
        "dateOfBirth": "1985-04-29",
        "driverLicenceID": "CURTI854295SK9FI 62",
        "latitude": 51.99191686492973,
        "longitude": -0.6983792565400733,
        "idType": "AnprID",
        "id": 1130,
        "timeStamp": "2015-05-01T14:45:53.000Z"
    }, {
        "registrationID": 90926,
        "registrationDate": "1995-08-01",
        "vehicleRegistrationNo": "IO77 NUK",
        "make": "Toyota",
        "model": "Yaris",
        "colour": "blue",
        "forenames": "Katy Jeanette",
        "surname": "Morton",
        "address": "21 PLANTATION PLACE, MILTON KEYNES, MK5 7FP",
        "dateOfBirth": "1948-01-13",
        "driverLicenceID": "MORTO451138KJ9BF 27",
        "latitude": 52.004523061316974,
        "longitude": -0.7101314301073126,
        "idType": "AnprID",
        "id": 3234,
        "timeStamp": "2015-05-01T14:44:01.000Z"
    }, {
        "bankAccountId": 445434,
        "accountNumber": 35491767,
        "bank": "Bank of Scotland",
        "forenames": "Keiran Martin",
        "surname": "Black",
        "dateOfBirth": "1986-03-25",
        "homeAddress": "84 PURLEY WAY, CROYDON, CR0 0XZ",
        "latitude": 52.0010366812786,
        "longitude": -0.714454986366195,
        "idType": "eposID",
        "id": 256,
        "timeStamp": "2015-05-01T16:30:24.000Z"
    }, {
        "bankAccountId": 407956,
        "accountNumber": 43594291,
        "bank": "Barclays Bank",
        "forenames": "Nicola",
        "surname": "Chalmers",
        "dateOfBirth": "1975-03-12",
        "homeAddress": "28 THE HAWTHORNS, READING, RG10 9TS",
        "latitude": 51.9921995290974,
        "longitude": -0.69929857257226,
        "idType": "eposID",
        "id": 894,
        "timeStamp": "2015-05-01T15:39:54.000Z"
    }, {
        "bankAccountId": 929830,
        "accountNumber": 22763991,
        "bank": "Bank of Scotland",
        "forenames": "Lyndsey Helen",
        "surname": "Elliott",
        "dateOfBirth": "1944-11-23",
        "homeAddress": "65 BIRCHALL ROAD, BRISTOL, BS6 7TU",
        "latitude": 51.9975987787286,
        "longitude": -0.709338657946343,
        "idType": "eposID",
        "id": 939,
        "timeStamp": "2015-05-01T16:11:54.000Z"
    }]
};

let inputValCelltowerID100Requests = {
    anprId: [],
    atmId: [],
    cellTowerID: [{
        cellTowerId: 48385,
        operator: 'Three',
        type: 'UMTS',
        latitude: 51.1455105797324,
        longitude: -2.63219089418816
    },
        {
            cellTowerId: 65631,
            operator: 'T-Mobile',
            type: 'GSM',
            latitude: 51.1455105797324,
            longitude: -2.63219089418816
        },
        {
            cellTowerId: 65632,
            operator: 'T-Mobile',
            type: 'GSM',
            latitude: 51.1455105797324,
            longitude: -2.63219089418816
        }],

    eposId: []
};

let expectedValCelltowerID100Requests = require('./expectedTestResults/expectedValCelltowerIdLimit100');


let inputValAnprIDLimit400 = {
    "anprId": 73,
    "intialTimeStamp": "2015-05-01 09:03:29",
    "finalTimeStamp": "2015-06-01 14:33:29",
    "limit": 400
};


const expectedValAnprIdlimit400 = require('./expectedTestResults/expectedValAnprIdlimit400.json');


let inputatmIdlimit1 = {
    anprId: [],
    atmId: [
        {
            atmId: 1298,
            operator: 'The Co-operative Bank',
            streetName: 'Greenland Road',
            postcode: 'NW1 0NE',
            latitude: 51.5389110013533,
            longitude: -0.142024223807971
        },
        {
            atmId: 1314,
            operator: 'HSBC Bank',
            streetName: 'Herbrand Street',
            postcode: 'WC1H0LQ',
            latitude: 51.5233752187118,
            longitude: -0.125588717117162
        },
        {
            atmId: 1315,
            operator: 'Barclays Bank',
            streetName: 'Guilford Street',
            postcode: 'B502',
            latitude: 51.5221284542368,
            longitude: -0.124126324910203
        },
        {
            atmId: 1332,
            operator: 'Nationwide Building Society',
            streetName: 'Windmill Street',
            postcode: 'W1T 2BU',
            latitude: 51.5191679566321,
            longitude: -0.133083925284975
        },
        {
            atmId: 1416,
            operator: 'HSBC Bank',
            streetName: 'Kentish Town Road',
            postcode: 'A400',
            latitude: 51.5395867336038,
            longitude: -0.14266005024997
        },
        {
            atmId: 1417,
            operator: 'The Royal Bank of Scotland',
            streetName: 'Camden High Street',
            postcode: 'A502',
            latitude: 51.5393227486474,
            longitude: -0.143031314287825
        },
        {
            atmId: 1418,
            operator: 'Lloyds Bank and TSB',
            streetName: 'Greenland Street',
            postcode: 'NW1 0RR',
            latitude: 51.5383721654576,
            longitude: -0.141512620644454
        },
        {
            atmId: 1430,
            operator: 'Lloyds Bank and TSB',
            streetName: 'Baker Street',
            postcode: 'A41',
            latitude: 51.5219199773561,
            longitude: -0.157505837536667
        },
        {
            atmId: 1446,
            operator: 'HSBC Bank',
            streetName: 'Percy Street',
            postcode: 'W1T 1DS',
            latitude: 51.5186694008282,
            longitude: -0.132844862169112
        },
    ],
    cellTowerId: [],
    eposId: []
};


const atmVal = require('./expectedTestResults/expectedAtmVal.json');

let initRes = [];

test("searching with a AnprId and epos and a limit of one", (done) => {
    jest.setTimeout(200000);
    searchLocationsByIdAndTime(inputValAnprAndEposIDOneRequest, intialTimeStampInput, finalTimeStampInput, smalllimit)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toStrictEqual(JSON.stringify(expectedValCelltowerIDOneRequest));
            done()
        })
});

test("searching with a anprID  and epos and a limit of 2", (done) => {
    jest.setTimeout(10000000);
    searchLocationsByIdAndTime(inputValAnprAndEposIDOneRequest, intialTimeStampInput, finalTimeStampInput, biglimit)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toStrictEqual(JSON.stringify(expectedValAnprIdlimit400));
            done()
        })
});


test("searching with a celltowerId and a limit of 1", (done) => {
    jest.setTimeout(200000);
    searchLocationsByIdAndTime(inputValCelltowerID100Requests, intialTimeStampInput, finalTimeStampInput)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            const test = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toEqual(JSON.stringify(expectedValCelltowerID100Requests));
            done()
        })
});

test("searching with a atmId and a limit of 1", (done) => {
    jest.setTimeout(200000);
    searchLocationsByIdAndTime(inputatmIdlimit1, intialTimeStampInput, finalTimeStampInput,smalllimit)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toEqual(JSON.stringify(atmVal));
            done()
        })
});

