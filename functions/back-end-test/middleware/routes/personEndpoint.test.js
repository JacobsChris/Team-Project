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

const matchingData = {
    "citizenData": [
        {
            "citizenID": 3729893493,
            "forenames": "Gillian Holly",
            "surname": "Newton",
            "homeAddress": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
            "dateOfBirth": "1989-01-16",
            "placeOfBirth": "HASLEMERE",
            "sex": "Female"
        }
    ],
    "bankAccountData": [
        {
            "bankAccountId": 277579,
            "accountNumber": 67968666,
            "bank": "National Westminster Bank",
            "forenames": "Gillian Holly",
            "surname": "Newton",
            "dateOfBirth": "1989-01-16",
            "homeAddress": "67 TAVISTOCK ROAD, LONDON, E15 4EP"
        }
    ],
    "mobilesData": [
        {
            "forenames": "Gillian Holly",
            "surname": "Newton",
            "dateOfBirth": "1989-01-16",
            "address": "67 TAVISTOCK ROAD, LONDON, E15 4EP",
            "phoneNumber": "07700 002267",
            "network": "Orange"
        }
    ],
    "vehicleData": [
        {
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
        }
    ],
    "vehicleSightings": [
        {
            "ANPRPointId": 1296,
            "timestamp": "2015-05-01T05:55:52.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 1296,
            "streetName": "Blackwall Tunnel Northern Approach, A12",
            "latitude": 51.53143204446358,
            "longitude": -0.01826155971575289
        },
        {
            "ANPRPointId": 4048,
            "timestamp": "2015-05-01T06:01:12.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 4048,
            "streetName": "Bethnal Green Road, A1209",
            "latitude": 51.52461141030367,
            "longitude": -0.07222853762422214
        },
        {
            "ANPRPointId": 1440,
            "timestamp": "2015-05-01T15:12:41.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 1440,
            "streetName": "A12",
            "latitude": 51.532270421063984,
            "longitude": -0.01921653790510903
        },
        {
            "ANPRPointId": 1296,
            "timestamp": "2015-05-02T05:50:38.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 1296,
            "streetName": "Blackwall Tunnel Northern Approach, A12",
            "latitude": 51.53143204446358,
            "longitude": -0.01826155971575289
        },
        {
            "ANPRPointId": 4048,
            "timestamp": "2015-05-02T05:55:58.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 4048,
            "streetName": "Bethnal Green Road, A1209",
            "latitude": 51.52461141030367,
            "longitude": -0.07222853762422214
        },
        {
            "ANPRPointId": 1440,
            "timestamp": "2015-05-02T14:31:18.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 1440,
            "streetName": "A12",
            "latitude": 51.532270421063984,
            "longitude": -0.01921653790510903
        },
        {
            "ANPRPointId": 7321,
            "timestamp": "2015-05-02T14:23:26.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 7321,
            "streetName": "Old Street, A5201",
            "latitude": 51.52462854663943,
            "longitude": -0.09417664470173367
        },
        {
            "ANPRPointId": 4048,
            "timestamp": "2015-05-03T05:50:02.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 4048,
            "streetName": "Bethnal Green Road, A1209",
            "latitude": 51.52461141030367,
            "longitude": -0.07222853762422214
        },
        {
            "ANPRPointId": 1296,
            "timestamp": "2015-05-03T05:44:42.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 1296,
            "streetName": "Blackwall Tunnel Northern Approach, A12",
            "latitude": 51.53143204446358,
            "longitude": -0.01826155971575289
        },
        {
            "ANPRPointId": 1440,
            "timestamp": "2015-05-03T14:28:03.000Z",
            "vehicleRegistrationNumber": "JO24 RTP",
            "anprId": 1440,
            "streetName": "A12",
            "latitude": 51.532270421063984,
            "longitude": -0.01921653790510903
        }
    ],
    "bankDetailsData": [
        {
            "bankcardId": 193894,
            "cardNumber": 2634571841835896,
            "sortCode": "39-80-29",
            "bankAccountId": 277579,
            "accountNumber": 67968666,
            "bank": "National Westminster Bank"
        }
    ],
    "transactionsData": {
        "epos": [
            {
                "timestamp": "2015-05-01T15:03:11.000Z",
                "eposId": 32967,
                "bankCardNumber": 2634571841835896,
                "payeeAccount": 72576527,
                "amount": 35.58,
                "id": 32967,
                "vendor": "CoCo",
                "streetName": "St. John Street, B501",
                "postcode": "EC1V0AZ",
                "latitude": 51.5260805510584,
                "longitude": -0.103622249912791
            }
        ],
        "atm": [
            {
                "timestamp": "2015-05-02T14:20:38.000Z",
                "atmId": 1984,
                "bankCardNumber": 2634571841835896,
                "type": "Cash Withdrawal",
                "amount": 30,
                "operator": "HSBC Bank",
                "streetName": "Gray's Inn Road",
                "postcode": "A5200",
                "latitude": 51.5215957950182,
                "longitude": -0.113351357217604
            }
        ]
    },
    "callHistoryData": [
        {
            "timestamp": "2015-05-02T08:01:36.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": 34788,
            "receiverNumber": "07700 904492",
            "receiverTowerId": -1
        },
        {
            "timestamp": "2015-05-02T08:01:36.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": -1,
            "receiverNumber": "07700 904492",
            "receiverTowerId": 112275
        },
        {
            "timestamp": "2015-05-01T10:40:35.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": 34788,
            "receiverNumber": "07700 613869",
            "receiverTowerId": -1
        },
        {
            "timestamp": "2015-05-01T10:40:35.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": -1,
            "receiverNumber": "07700 613869",
            "receiverTowerId": 60232
        },
        {
            "timestamp": "2015-05-02T19:22:31.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": -1,
            "receiverNumber": "07700 904492",
            "receiverTowerId": 128645
        },
        {
            "timestamp": "2015-05-02T19:22:31.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": 35082,
            "receiverNumber": "07700 904492",
            "receiverTowerId": -1
        },
        {
            "timestamp": "2015-05-03T13:46:58.000Z",
            "callerNumber": "07700 002267",
            "callCellTowerId": 34788,
            "receiverNumber": "07700 493682",
            "receiverTowerId": 35513
        }
    ],
    "acquaintancesData": [
        {
            "forenames": "Ian",
            "surname": "Howard",
            "dateOfBirth": "1969-03-17",
            "address": "29 WRAGBY ROAD, LONDON, E11 3LD",
            "phoneNumber": "07700 904492",
            "network": "Vodafone"
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
            "forenames": "Garry Luke",
            "surname": "Watson",
            "dateOfBirth": "1994-07-29",
            "address": "13 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 613869",
            "network": "Three"
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
            "forenames": "Ian",
            "surname": "Howard",
            "dateOfBirth": "1969-03-17",
            "address": "29 WRAGBY ROAD, LONDON, E11 3LD",
            "phoneNumber": "07700 904492",
            "network": "Vodafone"
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
            "forenames": "Brett Roger",
            "surname": "Law",
            "dateOfBirth": "1975-02-27",
            "address": "5 HAM PARK ROAD, LONDON, E15 4HE",
            "phoneNumber": "07700 493682",
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


describe('testing all person endpoints', function() {
    
    beforeAll( async function(done) {
        let res = await request(app)
            .post('/login')
            .send(adminUser);
        token = res.body.token;
        done();
    });

    afterEach(function(done) {
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
        expect(res.text).toBe(JSON.stringify(matchingData));
        done();
    });
});