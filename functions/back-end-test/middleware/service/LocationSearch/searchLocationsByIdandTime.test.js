const searchLocationsByIdAndTime = require("../../../../back-end/middleware/service/LocationSearch/searchLocationsByIdAndTime");


let inputValCelltowerIDOneRequest = {
    "cellTowerId": 140391,
    "intialTimeStamp": "2015-05-01 09:03:29",
    "finalTimeStamp": "2015-05-01 09:33:29",
    "limit": 1
};

let expectedValCelltowerIDOneRequest = {
    "eventIdTimeAndDetails": [{
        "forenames": "Antony Robin",
        "surname": "Sneddon",
        "dateOfBirth": "1951-05-08",
        "address": "22 HEATH ROAD, MAIDSTONE, ME16 9LG",
        "phoneNumber": "07700 801501",
        "network": "Vodafone",
        "idType": "CellTowerId",
        "id": 140391,
        "timeStamp": "2015-05-01T09:08:52.000Z"
    }, {
        "forenames": "Yvonne Cheryl",
        "surname": "Hussain",
        "dateOfBirth": "1970-01-11",
        "address": "109 EVELYN STREET, LONDON, SE8 5DD",
        "phoneNumber": "07700 245643",
        "network": "Vodafone",
        "idType": "CellTowerId",
        "id": 140391,
        "timeStamp": "2015-05-01T09:04:09.000Z"
    }]
};

let inputValCelltowerID100Requests = {
    "cellTowerId": 140391,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-06-01 14:33:29",
    "limit": 100
};

let expectedValCelltowerID100Requests = require('./expectedTestResults/expectedValCelltowerIdLimit100');

let inputValAnprIDlimit4 = {
    "anprId": 73,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 14:33:29",
    "limit": 4
};

let inputValAnprIDLimit400 = {
    "anprId": 73,
    "intialTimeStamp": "2015-05-01 09:03:29",
    "finalTimeStamp": "2015-06-01 14:33:29",
    "limit": 400
};

let expectedValAnprIdlimit4 = ({
    "eventIdTimeAndDetails": [{
        "registrationID": 18029,
        "registrationDate": "2013-08-28",
        "vehicleRegistrationNo": "PI78 QZB",
        "make": "Mercedes",
        "model": "E-Class",
        "colour": "black",
        "forenames": "Clare",
        "surname": "Arnold",
        "address": "33 CLEVEDON ROAD, BLACKPOOL, FY1 2NX",
        "dateOfBirth": "1964-09-15",
        "driverLicenceID": "ARNOL659154C99OL 30",
        "idType": "AnprID",
        "id": 73,
        "timeStamp": "2015-05-01T14:32:43.000Z"
    }]
});

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

test("searching with a celltowerId and a limit of one", (done) => {
    jest.setTimeout(200000);
    searchLocationsByIdAndTime(inputValCelltowerIDOneRequest)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toStrictEqual(JSON.stringify(expectedValCelltowerIDOneRequest));
            done()
        })
});


test("searching with a celltowerId and a limit of 100", (done) => {
    jest.setTimeout(200000);
    searchLocationsByIdAndTime(inputValCelltowerID100Requests)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            const test = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toEqual(JSON.stringify(expectedValCelltowerID100Requests));
            done()
        })
});

test("searching with a anprID and a limit of 4", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputValAnprIDlimit4)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            expect(JSON.stringify(initRes)).toStrictEqual(JSON.stringify(expectedValAnprIdlimit4));
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

