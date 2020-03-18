const request = require('supertest');
const app = require('../../../back-end/app');
const adminUser = require('../../adminUser.json');

const server = app;

let token = "";

const fullInput = {
    "citizenID": "",
    "forenames": "Gillian Holly",
    "surname": "Newton",
    "homeAddress": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
    "dateOfBirth": "1989-01-16",
    "placeOfBirth": "HASLEMERE",
    "sex": "Female"
};

const partialInput = {
    "citizenID": "",
    "forenames": "Gillian",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": "",
    "placeOfBirth": "",
    "sex": ""
};

const failureInput = {
    "citizenID": undefined,
    "forenames": "Gillian Holly",
    "surname": "Newton",
    "homeAddress": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
    "dateOfBirth": "1989-01-16",
    "placeOfBirth": "HASLEMERE",
    "sex": "Female"
};

const matchingData = {
    "citizenData": [{
        "citizenID": 3729893493,
        "forenames": "Gillian Holly",
        "surname": "Newton",
        "homeAddress": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
        "dateOfBirth": "1989-01-16",
        "placeOfBirth": "HASLEMERE",
        "sex": "Female"
    }],
    "bankAccountData": [{
        "bankAccountId": 277579,
        "accountNumber": 67968666,
        "bank": "National Westminster Bank",
        "forenames": "Gillian Holly",
        "surname": "Newton",
        "dateOfBirth": "1989-01-16",
        "homeAddress": "67 TAVISTOCK ROAD, LONDON, E15 4EP"
    }],
    "mobilesData": [{
        "forenames": "Gillian Holly",
        "surname": "Newton",
        "dateOfBirth": "1989-01-16",
        "address": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
        "phoneNumber": "07700 002267",
        "network": "Orange"
    }],
    "vehicleData": [{
        "registrationID": 178966,
        "registrationDate": "2013-01-10",
        "vehicleRegistrationNo": "JO24 RTP",
        "make": "Vauxhall",
        "model": "Astra",
        "colour": "natural",
        "forenames": "Gillian Holly",
        "surname": "Newton",
        "address": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
        "dateOfBirth": "1989-01-16",
        "driverLicenceID": "NEWTO851169GH9SQ 67"
    }],
    "vehicleSightings": [{
        "ANPRPointId": 1296,
        "timestamp": "2015-05-01T05:55:52.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 337292,
        "anprId": 1296,
        "streetName": "Blackwall Tunnel Northern Approach, A12",
        "latitude": 51.53143204446358,
        "longitude": -0.01826155971575289
    }, {
        "ANPRPointId": 4048,
        "timestamp": "2015-05-01T06:01:12.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 1861684,
        "anprId": 4048,
        "streetName": "Bethnal Green Road, A1209",
        "latitude": 51.52461141030367,
        "longitude": -0.07222853762422214
    }, {
        "ANPRPointId": 1440,
        "timestamp": "2015-05-01T15:12:41.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 1912962,
        "anprId": 1440,
        "streetName": "A12",
        "latitude": 51.532270421063984,
        "longitude": -0.01921653790510903
    }, {
        "ANPRPointId": 1296,
        "timestamp": "2015-05-02T05:50:38.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 3509270,
        "anprId": 1296,
        "streetName": "Blackwall Tunnel Northern Approach, A12",
        "latitude": 51.53143204446358,
        "longitude": -0.01826155971575289
    }, {
        "ANPRPointId": 4048,
        "timestamp": "2015-05-02T05:55:58.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 3644513,
        "anprId": 4048,
        "streetName": "Bethnal Green Road, A1209",
        "latitude": 51.52461141030367,
        "longitude": -0.07222853762422214
    }, {
        "ANPRPointId": 1440,
        "timestamp": "2015-05-02T14:31:18.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 6381956,
        "anprId": 1440,
        "streetName": "A12",
        "latitude": 51.532270421063984,
        "longitude": -0.01921653790510903
    }, {
        "ANPRPointId": 7321,
        "timestamp": "2015-05-02T14:23:26.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 8264040,
        "anprId": 7321,
        "streetName": "Old Street, A5201",
        "latitude": 51.52462854663943,
        "longitude": -0.09417664470173367
    }, {
        "ANPRPointId": 4048,
        "timestamp": "2015-05-03T05:50:02.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 9218849,
        "anprId": 4048,
        "streetName": "Bethnal Green Road, A1209",
        "latitude": 51.52461141030367,
        "longitude": -0.07222853762422214
    }, {
        "ANPRPointId": 1296,
        "timestamp": "2015-05-03T05:44:42.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 10857418,
        "anprId": 1296,
        "streetName": "Blackwall Tunnel Northern Approach, A12",
        "latitude": 51.53143204446358,
        "longitude": -0.01826155971575289
    }, {
        "ANPRPointId": 1440,
        "timestamp": "2015-05-03T14:28:03.000Z",
        "vehicleRegistrationNumber": "JO24 RTP",
        "sightingId": 12467672,
        "anprId": 1440,
        "streetName": "A12",
        "latitude": 51.532270421063984,
        "longitude": -0.01921653790510903
    }],
    "bankDetailsData": [{
        "bankcardId": 193894,
        "cardNumber": 2634571841835896,
        "sortCode": "39-80-29",
        "bankAccountId": 277579,
        "accountNumber": 67968666,
        "bank": "National Westminster Bank"
    }],
    "transactionsData": {
        "epos": [{
            "timestamp": "2015-05-01T15:03:11.000Z",
            "eposId": 32967,
            "bankCardNumber": 2634571841835896,
            "payeeAccount": 72576527,
            "amount": 35.58,
            "transactionId": 135465,
            "id": 32967,
            "vendor": "CoCo",
            "streetName": "St. John Street, B501",
            "postcode": "EC1V0AZ",
            "latitude": 51.5260805510584,
            "longitude": -0.103622249912791
        }],
        "atm": [{
            "timestamp": "2015-05-02T14:20:38.000Z",
            "atmId": 1984,
            "bankCardNumber": 2634571841835896,
            "type": "Cash Withdrawal",
            "amount": 30,
            "transactionsID": 129138,
            "operator": "HSBC Bank",
            "streetName": "Gray's Inn Road",
            "postcode": "A5200",
            "latitude": 51.5215957950182,
            "longitude": -0.113351357217604
        }]
    },
  
    "inComingCallHistory": [
        {
            "timestamp": "2015-05-02T06:59:10.000Z",
            "callerNumber": "07700 904492",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 34788,
            "phoneCallId": 1116721,
            "cellTowerId": 34788,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.5245845297589,
            "longitude": -0.104563791686722
        },
        {
            "timestamp": "2015-05-02T06:59:10.000Z",
            "callerNumber": "07700 904492",
            "callCellTowerId": 112275,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 1472512
        },
        {
            "timestamp": "2015-05-01T18:22:06.000Z",
            "callerNumber": "07700 060978",
            "callCellTowerId": 19984,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 3834211
        },
        {
            "timestamp": "2015-05-01T11:22:57.000Z",
            "callerNumber": "07700 838434",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 34788,
            "phoneCallId": 5631803,
            "cellTowerId": 34788,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.5245845297589,
            "longitude": -0.104563791686722
        },
        {
            "timestamp": "2015-05-01T18:16:27.000Z",
            "callerNumber": "07700 378599",
            "callCellTowerId": 71148,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 5868517
        },
        {
            "timestamp": "2015-05-01T11:22:57.000Z",
            "callerNumber": "07700 838434",
            "callCellTowerId": 98072,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 6330722
        },
        {
            "timestamp": "2015-05-01T18:22:06.000Z",
            "callerNumber": "07700 060978",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 7125967,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-01T18:16:27.000Z",
            "callerNumber": "07700 378599",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 7562581,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-01T20:02:36.000Z",
            "callerNumber": "07700 662897",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 8018168,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-01T20:37:41.000Z",
            "callerNumber": "07700 987576",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 8350185,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-01T20:02:36.000Z",
            "callerNumber": "07700 662897",
            "callCellTowerId": 51205,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 9982853
        },
        {
            "timestamp": "2015-05-02T12:29:38.000Z",
            "callerNumber": "07700 469870",
            "callCellTowerId": 60048,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 10513710
        },
        {
            "timestamp": "2015-05-02T12:29:38.000Z",
            "callerNumber": "07700 469870",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 34788,
            "phoneCallId": 11834007,
            "cellTowerId": 34788,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.5245845297589,
            "longitude": -0.104563791686722
        },
        {
            "timestamp": "2015-05-01T20:37:41.000Z",
            "callerNumber": "07700 987576",
            "callCellTowerId": 71148,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 13211050
        },
        {
            "timestamp": "2015-05-02T18:21:02.000Z",
            "callerNumber": "07700 904492",
            "callCellTowerId": 128645,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 14476931
        },
        {
            "timestamp": "2015-05-02T19:20:08.000Z",
            "callerNumber": "07700 378599",
            "callCellTowerId": 71148,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 14579758
        },
        {
            "timestamp": "2015-05-02T18:21:02.000Z",
            "callerNumber": "07700 904492",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 14927054,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-02T19:20:08.000Z",
            "callerNumber": "07700 378599",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 15206240,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-02T20:40:27.000Z",
            "callerNumber": "07700 875537",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 15930066,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-02T20:40:27.000Z",
            "callerNumber": "07700 875537",
            "callCellTowerId": 111032,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 17296129
        },
        {
            "timestamp": "2015-05-03T11:10:29.000Z",
            "callerNumber": "07700 378599",
            "callCellTowerId": 90352,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 20781992
        },
        {
            "timestamp": "2015-05-03T14:52:29.000Z",
            "callerNumber": "07700 053859",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 22255024,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-03T14:52:29.000Z",
            "callerNumber": "07700 053859",
            "callCellTowerId": 54958,
            "receiverNumber": "07700 002267",
            "receiverTowerId": -1,
            "phoneCallId": 22426313
        },
        {
            "timestamp": "2015-05-03T11:10:29.000Z",
            "callerNumber": "07700 378599",
            "callCellTowerId": -1,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 34788,
            "phoneCallId": 23357621,
            "cellTowerId": 34788,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.5245845297589,
            "longitude": -0.104563791686722
        },
        {
            "timestamp": "2015-05-03T23:00:02.000Z",
            "callerNumber": "07700 475717",
            "callCellTowerId": 35082,
            "receiverNumber": "07700 002267",
            "receiverTowerId": 35082,
            "phoneCallId": 26420113,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        }
    ],
    "outGoingCallHistory": [
        {
            "timestamp": "2015-05-02T08:01:36.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": 34788,
            "receiverNumber": "07700 904492",
            "receiverTowerId": -1,
            "phoneCallId": 2138043,
            "cellTowerId": 34788,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.5245845297589,
            "longitude": -0.104563791686722
        },
        {
            "timestamp": "2015-05-02T08:01:36.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": -1,
            "receiverNumber": "07700 904492",
            "receiverTowerId": 112275,
            "phoneCallId": 4077818
        },
        {
            "timestamp": "2015-05-01T10:40:35.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": 34788,
            "receiverNumber": "07700 613869",
            "receiverTowerId": -1,
            "phoneCallId": 4644000,
            "cellTowerId": 34788,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.5245845297589,
            "longitude": -0.104563791686722
        },
        {
            "timestamp": "2015-05-01T10:40:35.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": -1,
            "receiverNumber": "07700 613869",
            "receiverTowerId": 60232,
            "phoneCallId": 6834568
        },
        {
            "timestamp": "2015-05-02T19:22:31.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": -1,
            "receiverNumber": "07700 904492",
            "receiverTowerId": 128645,
            "phoneCallId": 14055059
        },
        {
            "timestamp": "2015-05-02T19:22:31.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": 35082,
            "receiverNumber": "07700 904492",
            "receiverTowerId": -1,
            "phoneCallId": 16621736,
            "cellTowerId": 35082,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.540689913717,
            "longitude": 0.00873503751890265
        },
        {
            "timestamp": "2015-05-03T13:46:58.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": 34788,
            "receiverNumber": "07700 493682",
            "receiverTowerId": 35513,
            "phoneCallId": 22045150,
            "cellTowerId": 34788,
            "operator": "Orange",
            "type": "GSM",
            "latitude": 51.5245845297589,
            "longitude": -0.104563791686722
        }
    ],
    "targetHasCalled": [
        {
            "forenames": "Ian",
            "surname": "Howard",
            "dateOfBirth": "1969-03-17",
            "address": "29 WRAGBY ROAD, LONDON, E11 3LD",
            "phoneNumber": "07700 904492",
            "network": "Vodafone"
        },
        {
            "forenames": "Garry Luke",
            "surname": "Watson",
            "dateOfBirth": "1994-07-29",
            "address": "13 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 613869",
            "network": "Three"
        },
        {
            "forenames": "Brett Roger",
            "surname": "Law",
            "dateOfBirth": "1975-02-27",
            "address": "5 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 493682",
            "network": "Orange"
        }
    ],
    "targetHasBeenCalledBy": [
        {
            "forenames": "Gordon Shaun",
            "surname": "Miles",
            "dateOfBirth": "1972-09-22",
            "address": "20 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 378599",
            "network": "T-Mobile"
        },
        {
            "forenames": "Ian",
            "surname": "Howard",
            "dateOfBirth": "1969-03-17",
            "address": "29 WRAGBY ROAD, LONDON, E11 3LD",
            "phoneNumber": "07700 904492",
            "network": "Vodafone"
        },
        {
            "forenames": "Tanya Kathleen",
            "surname": "Howard",
            "dateOfBirth": "1982-11-15",
            "address": "29 WRAGBY ROAD, LONDON, E11 3LD",
            "phoneNumber": "07700 060978",
            "network": "O2"
        },
        {
            "forenames": "Thomas Allan",
            "surname": "Chambers",
            "dateOfBirth": "1955-05-07",
            "address": "60 TAVISTOCK ROAD, LONDON, E15 4EP",
            "phoneNumber": "07700 838434",
            "network": "Vodafone"
        },
        {
            "forenames": "Cheryl",
            "surname": "Watson",
            "dateOfBirth": "1964-06-23",
            "address": "13 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 662897",
            "network": "Three"
        },
        {
            "forenames": "Fiona Lynda",
            "surname": "Bruce",
            "dateOfBirth": "1940-09-10",
            "address": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
            "phoneNumber": "07700 987576",
            "network": "T-Mobile"
        },
        {
            "forenames": "Kenneth Julian",
            "surname": "Wilkinson",
            "dateOfBirth": "1947-10-03",
            "address": "8 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 469870",
            "network": "Three"
        },
        {
            "forenames": "Alex Tony",
            "surname": "Dawson",
            "dateOfBirth": "1987-09-23",
            "address": "25 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 875537",
            "network": "Vodafone"
        },
        {
            "forenames": "Lorraine",
            "surname": "Petrie",
            "dateOfBirth": "1954-07-01",
            "address": "8 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 053859",
            "network": "Three"
        },
        {
            "forenames": "Michele Emma",
            "surname": "Anderson",
            "dateOfBirth": "1970-11-09",
            "address": "62 TAVISTOCK ROAD, LONDON, E15 4EP",
            "phoneNumber": "07700 475717",
            "network": "Orange"
        }
    ]
};

const partialMatchingData = [
    {
        "citizenID": 1135544248,
        "forenames": "Gillian Abigail",
        "surname": "Newton",
        "homeAddress": "35 RIDGACRE LANE, BIRMINGHAM, B32 1EL",
        "dateOfBirth": "1980-08-26",
        "placeOfBirth": "LEATHERHEAD",
        "sex": "Female"
    },
    {
        "citizenID": 1337943563,
        "forenames": "Gillian Laura",
        "surname": "Newton",
        "homeAddress": "163 LAWRENCE AVENUE, LONDON, E12 5QR",
        "dateOfBirth": "1986-06-27",
        "placeOfBirth": "KETTERING",
        "sex": "Female"
    },
    {
        "citizenID": 1894479597,
        "forenames": "Nichola Gillian",
        "surname": "Newton",
        "homeAddress": "8 CRANES CLOSE, BASILDON, SS14 3JB",
        "dateOfBirth": "1977-10-19",
        "placeOfBirth": "REDDITCH",
        "sex": "Female"
    },
    {
        "citizenID": 3211282421,
        "forenames": "Gillian Caroline",
        "surname": "Newton",
        "homeAddress": "23 ANSELM ROAD, LONDON, SW6 1LH",
        "dateOfBirth": "1964-06-17",
        "placeOfBirth": "NOTTINGHAM",
        "sex": "Female"
    },
    {
        "citizenID": 3729893493,
        "forenames": "Gillian Holly",
        "surname": "Newton",
        "homeAddress": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
        "dateOfBirth": "1989-01-16",
        "placeOfBirth": "HASLEMERE",
        "sex": "Female"
    },
    {
        "citizenID": 5581332372,
        "forenames": "Lynn Gillian",
        "surname": "Newton",
        "homeAddress": "51 RADNOR ROAD, HARROW, HA1 1SA",
        "dateOfBirth": "1987-11-07",
        "placeOfBirth": "LEEDS",
        "sex": "Female"
    },
    {
        "citizenID": 5629233377,
        "forenames": "Gillian Kathryn",
        "surname": "Newton",
        "homeAddress": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
        "dateOfBirth": "1952-03-06",
        "placeOfBirth": "DERBY",
        "sex": "Female"
    },
    {
        "citizenID": 5784736995,
        "forenames": "Frances Gillian",
        "surname": "Newton",
        "homeAddress": "382 HAMSTEAD ROAD, BIRMINGHAM, B43 5EH",
        "dateOfBirth": "1942-02-06",
        "placeOfBirth": "BOSTON",
        "sex": "Female"
    },
    {
        "citizenID": 8158981123,
        "forenames": "Jayne Gillian",
        "surname": "Newton",
        "homeAddress": "96 LORDSHIP LANE, LONDON, SE22 8HJ",
        "dateOfBirth": "1951-11-03",
        "placeOfBirth": "SALE",
        "sex": "Female"
    },
    {
        "citizenID": 8635291285,
        "forenames": "Gillian Denise",
        "surname": "Newton",
        "homeAddress": "122 ROMSEY ROAD, DAGENHAM, RM9 6BB",
        "dateOfBirth": "1960-10-27",
        "placeOfBirth": "LONDON",
        "sex": "Female"
    },
    {
        "citizenID": 9664222332,
        "forenames": "Gillian",
        "surname": "Newton",
        "homeAddress": "97 RIEFIELD ROAD, LONDON, SE9 2RB",
        "dateOfBirth": "1984-04-15",
        "placeOfBirth": "HORNCHURCH",
        "sex": "Female"
    },
    {
        "citizenID": 9794299466,
        "forenames": "Jane Gillian",
        "surname": "Newton",
        "homeAddress": "16 HANOVER STREET, BRIGHTON, BN2 9ST",
        "dateOfBirth": "1964-10-20",
        "placeOfBirth": "LONDON",
        "sex": "Female"
    }
];


describe('testing all person endpoints', function () {

    beforeAll(async function (done) {
        let res = await request(app)
            .post('/login')
            .send({
                username: adminUser.username,
                password: adminUser.password
            });
        token = res.body.token;
        done();
    });

    afterAll(function (done) {
        server.close();
        done();
    });

    it('should get all data that partially matches the input', async (done) => {
        let res = await request(app)
            .post('/back-end/person/getData')
            .set("Authorization", token)
            .send(partialInput);
        jest.setTimeout(100000);
        expect(res.text).toBe(JSON.stringify(partialMatchingData));
        done();
    });

    it('should get data that fully match the input', async (done) => {
        let res = await request(app)
            .post('/back-end/person/getMatching')
            .set("Authorization", token)
            .send(fullInput);
        jest.setTimeout(100000);
        expect(res.text).toEqual(JSON.stringify(matchingData));
        done();
    });

    it('should return an empty array if any of the inputs are not strings', async (done) => {
        let res = await request(app)
            .post('/back-end/person/getData')
            .set("Authorization", token)
            .send(failureInput);
        jest.setTimeout(100000);
        expect(res.text).toBe("[]");
        done();
    });
});