const request = require('supertest');
const app = require('../../../back-end/app');
const adminUser = require('../../adminUser.json');
const searchByVehicleReg = require('../../../back-end/middleware/service/vehicle/searchByVehicleReg');

const server = app;

let token = "";

const partialInput = {
    "vehicleRegistrationNo": "IK54 ___"
};

const failureInput = {
    "vehicleRegistrationNo": undefined
};

const partialMatchingData = [
    {
        "registrationID": 131213,
        "registrationDate": "2013-01-12",
        "vehicleRegistrationNo": "IK54 EBY",
        "make": "Vauxhall",
        "model": "Corsa",
        "colour": "red",
        "forenames": "Michelle Karen",
        "surname": "Robson",
        "address": "607 HIGH STREET, STOKE-ON-TRENT, ST6 5PD",
        "dateOfBirth": "1942-09-06",
        "driverLicenceID": "ROBSO459062MK9KO 14"
    },
    {
        "registrationID": 9652,
        "registrationDate": "2003-04-06",
        "vehicleRegistrationNo": "IK54 ICL",
        "make": "Vauxhall",
        "model": "Corsa",
        "colour": "green",
        "forenames": "Catherine Patricia",
        "surname": "Booth",
        "address": "16 BURNS AVENUE, SOUTHALL, UB1 2LP",
        "dateOfBirth": "1972-07-27",
        "driverLicenceID": "BOOTH757272CP9TM 53"
    },
    {
        "registrationID": 136369,
        "registrationDate": "2014-07-17",
        "vehicleRegistrationNo": "IK54 QLA",
        "make": "Ford",
        "model": "Focus",
        "colour": "white",
        "forenames": "Ashley",
        "surname": "O'brien",
        "address": "30 WARGRAVE ROAD, NEWTON-LE-WILLOWS, WA12 9QZ",
        "dateOfBirth": "1970-06-07",
        "driverLicenceID": "OBRIE706070A99UX 70"
    },
    {
        "registrationID": 78243,
        "registrationDate": "1998-05-06",
        "vehicleRegistrationNo": "IK54 CHX",
        "make": "Fiat",
        "model": "500",
        "colour": "white",
        "forenames": "Debra Rachel",
        "surname": "Davis",
        "address": "3 WOODSTOCK CLOSE, HINCKLEY, LE10 2EG",
        "dateOfBirth": "1966-08-30",
        "driverLicenceID": "DAVIS658306DR9GE 44"
    },
    {
        "registrationID": 100770,
        "registrationDate": "2004-01-18",
        "vehicleRegistrationNo": "IK54 MRU",
        "make": "Peugeot",
        "model": "208",
        "colour": "natural",
        "forenames": "Leslie Stewart",
        "surname": "Bradley",
        "address": "14 HIGHLANDS, WATFORD, WD19 4LY",
        "dateOfBirth": "1954-08-21",
        "driverLicenceID": "BRADL508214LS9GL 71"
    },
    {
        "registrationID": 172293,
        "registrationDate": "2005-10-02",
        "vehicleRegistrationNo": "IK54 PIT",
        "make": "Ford",
        "model": "Focus",
        "colour": "silver",
        "forenames": "Carol Gillian",
        "surname": "Mackenzie",
        "address": "332 NEW ROAD, FERNDOWN, BH22 8EJ",
        "dateOfBirth": "1993-01-02",
        "driverLicenceID": "MACKE951023CG9PW 94"
    },
    {
        "registrationID": 193531,
        "registrationDate": "1995-11-26",
        "vehicleRegistrationNo": "IK54 OOM",
        "make": "Volkswagen",
        "model": "Golf",
        "colour": "silver",
        "forenames": "Graham John",
        "surname": "Burnett",
        "address": "24 HIGH STREET, MIDDLESBROUGH, TS9 5DQ",
        "dateOfBirth": "1994-10-31",
        "driverLicenceID": "BURNE910314GJ9CP 32"
    },
    {
        "registrationID": 139182,
        "registrationDate": "2003-11-15",
        "vehicleRegistrationNo": "IK54 UDF",
        "make": "Nissan",
        "model": "Juke",
        "colour": "green",
        "forenames": "Keith",
        "surname": "Morgan",
        "address": "9 PATHFINDER WAY, HUNTINGDON, PE28 2RD",
        "dateOfBirth": "1970-01-28",
        "driverLicenceID": "MORGA701280K99FC 83"
    },
    {
        "registrationID": 164456,
        "registrationDate": "2003-09-06",
        "vehicleRegistrationNo": "IK54 TVV",
        "make": "Volkswagen",
        "model": "Polo",
        "colour": "red",
        "forenames": "Karen Kerry",
        "surname": "Boyd",
        "address": "36 ADDENBROOKE DRIVE, LIVERPOOL, L24 9LL",
        "dateOfBirth": "1964-12-14",
        "driverLicenceID": "BOYD9662144KK9EW 57"
    },
    {
        "registrationID": 452663,
        "registrationDate": "2000-12-29",
        "vehicleRegistrationNo": "IK54 BAL",
        "make": "Nissan",
        "model": "Qashqai",
        "colour": "red",
        "forenames": "Glen Luke",
        "surname": "Lambert",
        "address": "143 BRISTOL ROAD, GLOUCESTER, GL1 5SR",
        "dateOfBirth": "1985-01-10",
        "driverLicenceID": "LAMBE801105GL9RG 64"
    },
    {
        "registrationID": 455299,
        "registrationDate": "1998-01-17",
        "vehicleRegistrationNo": "IK54 ESL",
        "make": "Vauxhall",
        "model": "Astra",
        "colour": "white",
        "forenames": "Jemma",
        "surname": "Arnold",
        "address": "70 CALDERBROOK DRIVE, CHEADLE, SK8 5RZ",
        "dateOfBirth": "1968-01-28",
        "driverLicenceID": "ARNOL651288J99NH 00"
    },
    {
        "registrationID": 356113,
        "registrationDate": "2005-05-14",
        "vehicleRegistrationNo": "IK54 ETU",
        "make": "Vauxhall",
        "model": "Astra",
        "colour": "white",
        "forenames": "Antony Leigh",
        "surname": "Willis",
        "address": "35 KINGS ROAD, WEST BROMWICH, B11 2AX",
        "dateOfBirth": "1989-09-28",
        "driverLicenceID": "WILLI809289AL9HO 14"
    },
    {
        "registrationID": 630639,
        "registrationDate": "2003-04-09",
        "vehicleRegistrationNo": "IK54 QMO",
        "make": "Ford",
        "model": "Fiesta",
        "colour": "red",
        "forenames": "Joshua Robert",
        "surname": "Austin",
        "address": "173 DERBY ROAD, NOTTINGHAM, NG9 7AY",
        "dateOfBirth": "1967-01-14",
        "driverLicenceID": "AUSTI601147JR9FE 40"
    },
    {
        "registrationID": 363614,
        "registrationDate": "2013-03-22",
        "vehicleRegistrationNo": "IK54 FDK",
        "make": "Mercedes",
        "model": "E-Class",
        "colour": "silver",
        "forenames": "Clive",
        "surname": "Chapman",
        "address": "109 HEDNESFORD ROAD, CANNOCK, WS12 3HL",
        "dateOfBirth": "1961-08-02",
        "driverLicenceID": "CHAPM608021C99WO 15"
    },
    {
        "registrationID": 378808,
        "registrationDate": "1998-10-28",
        "vehicleRegistrationNo": "IK54 WOZ",
        "make": "Fiat",
        "model": "500",
        "colour": "white",
        "forenames": "Trevor Russell",
        "surname": "Payne",
        "address": "39 FILMER ROAD, LONDON, SW6 7JJ",
        "dateOfBirth": "1975-08-31",
        "driverLicenceID": "PAYNE708315TR9OC 09"
    },
    {
        "registrationID": 422563,
        "registrationDate": "2009-01-02",
        "vehicleRegistrationNo": "IK54 DHW",
        "make": "Mercedes",
        "model": "C Class",
        "colour": "white",
        "forenames": "Danielle",
        "surname": "Ramsay",
        "address": "6B OXFORD STREET, BILSTON, WV14 7HZ",
        "dateOfBirth": "1942-11-07",
        "driverLicenceID": "RAMSA461072D99VC 64"
    },
    {
        "registrationID": 309004,
        "registrationDate": "2007-01-14",
        "vehicleRegistrationNo": "IK54 PEB",
        "make": "Mini",
        "model": "One",
        "colour": "white",
        "forenames": "Terence Garry",
        "surname": "Stephens",
        "address": "53 CATESBY ROAD, RUGBY, CV22 5JL",
        "dateOfBirth": "1988-11-02",
        "driverLicenceID": "STEPH811028TG9EK 05"
    },
    {
        "registrationID": 234480,
        "registrationDate": "2008-03-19",
        "vehicleRegistrationNo": "IK54 FMS",
        "make": "Vauxhall",
        "model": "Astra",
        "colour": "gray",
        "forenames": "Ann Sharon",
        "surname": "Parsons",
        "address": "78 ROE DRIVE, NORWICH, NR5 8BT",
        "dateOfBirth": "1990-10-24",
        "driverLicenceID": "PARSO960240AS9VB 81"
    },
    {
        "registrationID": 527534,
        "registrationDate": "2007-05-15",
        "vehicleRegistrationNo": "IK54 GFJ",
        "make": "Ford",
        "model": "Fiesta",
        "colour": "white",
        "forenames": "Judith",
        "surname": "Kane",
        "address": "20 ASH GROVE, STOCKTON-ON-TEES, TS15 9NQ",
        "dateOfBirth": "1971-02-07",
        "driverLicenceID": "KANE9752071J99OK 35"
    },
    {
        "registrationID": 664566,
        "registrationDate": "2001-07-18",
        "vehicleRegistrationNo": "IK54 ECH",
        "make": "Mercedes",
        "model": "C Class",
        "colour": "white",
        "forenames": "Fiona Jennifer",
        "surname": "West",
        "address": "21 MEADOWSIDE CLOSE, HAYLE, TR27 4JL",
        "dateOfBirth": "1965-05-25",
        "driverLicenceID": "WEST9655255FJ9UB 67"
    }
];

describe('testing all vehicle endpoints', function() {
    
    beforeAll( async function(done) {
        let res = await request(app)
            .post('/login')
            .send({
                username: adminUser.username,
                password: adminUser.password
            });
        token = res.body.token;
        done();
    });

    afterAll(function(done) {
        server.close();
        done();
    });

    it('should get all data that partially matches the input', async (done) => {
        let res = await request(app)
            .post('/back-end/vehicle/getData')
            .set("Authorization", token)
            .send(partialInput);
        jest.setTimeout(100000);
        expect(res.text).toBe(JSON.stringify(partialMatchingData));
        done();        
    });

    it('should throw an error if the input is not an empty string', (done) => {
        let res = request(app)
            .post('/back-end/vehicle/getData')
            .set("Authorization", token)
            .send(failureInput);
        res.catch(error => {
            expect(error.response).toBeUndefined();
        });
        done();
    });
});