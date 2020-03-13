const searchLocationsByIdAndTime = require("../../../../../../back-end/middleware/service/person/background/LocationSearch/searchLocationsByIdAndTime");


let inputValCelltowerIDOneRequest = {
    "cellTowerId": 140391,
    "intialTimeStamp": "2015-05-01 09:03:29",
    "finalTimeStamp": "2015-05-01 09:33:29",
    "limit": 1
};

let expectedValCelltowerIDOneRequest = {
    "output3": [
        {
            "address": "22 HEATH ROAD, MAIDSTONE, ME16 9LG",
            "dateOfBirth": "1951-05-08",
            "forenames": "Antony Robin",
            "id": 140391,
            "idType": "CellTowerId",
            "network": "Vodafone",
            "phoneNumber": "07700 801501",
            "surname": "Sneddon",
            "timeStamp": {}
        },
        {
            "address": "109 EVELYN STREET, LONDON, SE8 5DD",
            "dateOfBirth": "1970-01-11",
            "forenames": "Yvonne Cheryl",
            "id": 140391,
            "idType": "CellTowerId",
            "network": "Vodafone",
            "phoneNumber": "07700 245643",
            "surname": "Hussain",
            "timeStamp": {}
        }
    ]
};

let expectedValCelltowerID10Requests = {
    "output3": [{
        "forenames": "Simon Donald",
        "surname": "Wright",
        "dateOfBirth": "1993-09-06",
        "address": "165 DANESCROFT DRIVE, LEIGH-ON-SEA, SS9 4NQ",
        "phoneNumber": "07700 442516",
        "network": "Vodafone",
        "idType": "CellTowerId",
        "id": 140391,
        "timeStamp": "2015-05-01T14:12:50.000Z"
    }, {
        "forenames": "Iain Luke",
        "surname": "Ellis",
        "dateOfBirth": "1981-05-09",
        "address": "31 NURSERY GROVE, GRAVESEND, DA11 7BB",
        "phoneNumber": "07700 070872",
        "network": "Vodafone",
        "idType": "CellTowerId",
        "id": 140391,
        "timeStamp": "2015-05-01T14:04:59.000Z"
    }, {
        "forenames": "Simon Ross",
        "surname": "Shaw",
        "dateOfBirth": "1970-05-31",
        "address": "13 DEVONSHIRE ROAD, GRAVESEND, DA12 5AA",
        "phoneNumber": "07700 152824",
        "network": "Vodafone",
        "idType": "CellTowerId",
        "id": 140391,
        "timeStamp": "2015-05-01T14:12:45.000Z"
    }, {
        "forenames": "Karen Alison",
        "surname": "Payne",
        "dateOfBirth": "1940-09-28",
        "address": "272 HEMPSTEAD ROAD, GILLINGHAM, ME7 3QH",
        "phoneNumber": "07700 785027",
        "network": "T-Mobile",
        "idType": "CellTowerId",
        "id": 140391,
        "timeStamp": "2015-05-01T14:17:01.000Z"
    }]
};

let inputValCelltowerIDTenRequests = {
    "cellTowerId": 140391,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 14:33:29",
    "limit": 10
};

let inputValAnprIDOneRequest = {
    "anprId": 73,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 14:33:29",
    "limit": 4
};

let expectedValAnprIdOneRequest = ({
    "output3": [
        {
            "address": "33 CLEVEDON ROAD, BLACKPOOL, FY1 2NX",
            "colour": "black",
            "dateOfBirth": "1964-09-15",
            "driverLicenceID": "ARNOL659154C99OL 30",
            "forenames": "Clare",
            "id": 73,
            "idType": "AnprID",
            "make": "Mercedes",
            "model": "E-Class",
            "registrationDate": "2013-08-28",
            "registrationID": 18029,
            "surname": "Arnold",
            "timeStamp": '2015-05-01T14:32:43.000Z',
            "vehicleRegistrationNo": "PI78 QZB"
        }
    ]
});


let inputAtmIdOneRequest = {
    "atmId": 697,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 16:33:29",
    "limit": 1
};

let expectedValAtmIdOneRequest = {
    output3:
        [{
            "bankAccountId": 451310,
            "accountNumber": 4448212,
            "bank": 'The Co-operative Bank',
            "forenames": 'Aimee Katy',
            "surname": 'Mckay',
            "dateOfBirth": '1969-11-18',
            "homeAddress": '87 LYNHURST CRESCENT, UXBRIDGE, UB10 9EQ',
            "idType": 'atmID',
            "id": 697,
            "timeStamp": "2015-05-01T14:37:28.000Z"
        }]
};

let inputEposIDOneRequest = {
    "eposId": 696,
    "intialTimeStamp": "2015-05-01 14:03:29",
    "finalTimeStamp": "2015-05-01 16:33:29",
    "limit": 1
};

let expectedValEposIdOneRequest = {
    output3:
        [{
            "bankAccountId": 468721,
            "accountNumber": 8636271,
            "bank": 'Barclays Bank',
            "forenames": 'Joseph Shane',
            "surname": 'Logan',
            "dateOfBirth": '1991-02-14',
            "homeAddress": '69 KINGS ROAD, BIRMINGHAM, B11 2AA',
            "idType": 'eposID',
            "id": 696,
            "timeStamp": "2015-05-01T14:37:26.000Z"
        }]
};

let initRes = [];

test("searching with a celltowerId and a limit of one", (done) => {
    jest.setTimeout(200000);
    searchLocationsByIdAndTime(inputValCelltowerIDOneRequest)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            expect(initRes).toStrictEqual.toString(expectedValCelltowerIDOneRequest);
            done()
        })
});


test("searching with a celltowerId and a limit of 10", (done) => {
    jest.setTimeout(200000);
    searchLocationsByIdAndTime(inputValCelltowerIDTenRequests)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            const test = eventIdTimeAndDetails
            console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyy", eventIdTimeAndDetails)
            console.log("wwwwwwwwwwwwwwwww", eventIdTimeAndDetails)

            expect(JSON.stringify(initRes)).toEqual(JSON.stringify(expectedValCelltowerID10Requests));
            done()
        })
});

test("searching with a anprID and a limit of one", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputValAnprIDOneRequest)
        .then((eventIdTimeAndDetails) => {
            initRes = eventIdTimeAndDetails;
            expect(initRes).toStrictEqual.toString(expectedValAnprIdOneRequest);
            done()
        })
});

test("searching with a atmId and a limit of one", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputAtmIdOneRequest)
        .then((expectedValAtmID) => {
            initRes = expectedValAtmID;
            expect(initRes).toStrictEqual.toString(expectedValAtmIdOneRequest);
            done()
        })
});

test("searching with a eposId and a limit of one", (done) => {
    jest.setTimeout(100000);
    searchLocationsByIdAndTime(inputEposIDOneRequest)
        .then((eventIdTimeAndDetails) => {
            initRes = (eventIdTimeAndDetails);
            expect(initRes).toStrictEqual.toString(expectedValEposIdOneRequest);
            done()
        })
});

