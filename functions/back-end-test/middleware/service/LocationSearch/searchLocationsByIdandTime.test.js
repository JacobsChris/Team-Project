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
        "idType": "eposID",
        "id": 939,
        "timeStamp": "2015-05-01T16:11:54.000Z"
    }]
};

let expectedValCelltowerID100Requests = require('./expectedTestResults/expectedValCelltowerIdLimit100');


let inputValAnprIDLimit400 = {
    "anprId": 73,
    "intialTimeStamp": "2015-05-01 09:03:29",
    "finalTimeStamp": "2015-06-01 14:33:29",
    "limit": 400
};


const expectedValAnprIdlimit400 = require('./expectedTestResults/expectedValAnprIdlimit400.json');


let inputAtmIdOneRequest = {
    "atmId": 697,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 16:33:29",
    "limit": 1
};

let inputAtmId100Requests = {
    "atmId": 697,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-06-01 16:33:29",
    "limit": 15
};

let expectedValAtmIdOneRequest = {
    "eventIdTimeAndDetails": [{
        "bankAccountId": 451310,
        "accountNumber": 4448212,
        "bank": "The Co-operative Bank",
        "forenames": "Aimee Katy",
        "surname": "Mckay",
        "dateOfBirth": "1969-11-18",
        "homeAddress": "87 LYNHURST CRESCENT, UXBRIDGE, UB10 9EQ",
        "idType": "atmID",
        "id": 697,
        "timeStamp": "2015-05-01T14:37:28.000Z"
    }]
};

const expectedValAtmId15Requests = require('./expectedTestResults/expectedValAtmIdlimit15.json');

let inputEposIDOneRequest = {
    "eposId": 696,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 16:33:29",
    "limit": 1
};

let inputEposID100Request = {
    "eposId": 696,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-06-01 16:33:29",
    "limit": 20
};

let expectedValEposIdOneRequest = {
    "eventIdTimeAndDetails": [{
        "bankAccountId": 468721,
        "accountNumber": 8636271,
        "bank": "Barclays Bank",
        "forenames": "Joseph Shane",
        "surname": "Logan",
        "dateOfBirth": "1991-02-14",
        "homeAddress": "69 KINGS ROAD, BIRMINGHAM, B11 2AA",
        "idType": "eposID",
        "id": 696,
        "timeStamp": "2015-05-01T14:37:26.000Z"
    }]
};

const expectedValEposId20Request = require('./expectedTestResults/expectedValEposIdlimit20.json');

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


test("searching with a celltowerId and a limit of 100", (done) => {
    jest.setTimeout(200000);
    searchLocationsByIdAndTime(inputValCelltowerID100Requests, intialTimeStampInput, finalTimeStampInput)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            const test = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toEqual(JSON.stringify(expectedValCelltowerID100Requests));
            done()
        })
});


test("searching with a anprID and a limit of 400", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputValAnprIDLimit400)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toEqual(JSON.stringify(expectedValAnprIdlimit400));
            done()
        })
});

test("searching with a atmId and a limit of one", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputAtmIdOneRequest)
        .then((expectedValAtmID) => {
            initRes = expectedValAtmID;
            expect(JSON.stringify(initRes)).toStrictEqual(JSON.stringify(expectedValAtmIdOneRequest));
            done()
        })
});

test("searching with a atmId and a limit of 15", (done) => {
    jest.setTimeout(10000000);
    searchLocationsByIdAndTime(inputAtmId100Requests)
        .then((expectedValAtmID) => {
            initRes = expectedValAtmID;
            expect(JSON.stringify(initRes)).toStrictEqual(JSON.stringify(expectedValAtmId15Requests));
            done()
        })
});

test("searching with a eposId and a limit of one", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputEposIDOneRequest)
        .then((eventIdTimeAndDetails) => {
            initRes = (eventIdTimeAndDetails);
            expect(JSON.stringify(initRes)).toStrictEqual(JSON.stringify(expectedValEposIdOneRequest));
            done()
        })
});

test("searching with a eposId and a limit of 20", (done) => {
    jest.setTimeout(250000);
    searchLocationsByIdAndTime(inputEposID100Request)
        .then((eventIdTimeAndDetails) => {
            initRes = (eventIdTimeAndDetails);
            expect(JSON.stringify(initRes)).toStrictEqual(JSON.stringify(expectedValEposId20Request));
            done()
        })
});

