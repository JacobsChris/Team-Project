const request = require('supertest');
const app = require('../../../back-end/app');
const adminUser = require('../../adminUser.json');

const server = app;

let token = "";

const searchInput = {
    "latitude": "51.5384050430001",
    "longitude": "0.166",
    "radius" : "250",
    "startTime": "2015-05-01 09:08:52",
    "endTime": "2015-05-01 09:31:52",
    "limit": 1
};

const responseData = {
    "eventIdTimeAndDetails": [
        {
            "registrationID": 284616,
            "registrationDate": "2008-04-24",
            "vehicleRegistrationNo": "XJ48 MGY",
            "make": "Audi",
            "model": "A3",
            "colour": "black",
            "forenames": "Tony Iain",
            "surname": "Carter",
            "address": "29 BLAKE CLOSE, RAINHAM, RM13 8BE",
            "dateOfBirth": "1994-01-22",
            "driverLicenceID": "CARTE901224TI9VX 17",
            "latitude": 51.5384050430001,
            "longitude": 0.1668546386105114,
            "idType": "AnprID",
            "id": 0,
            "timeStamp": "2015-05-01T09:18:48.000Z"
        },
        {
            "forenames": "Tina Andrea",
            "surname": "Mccallum",
            "dateOfBirth": "1950-03-18",
            "address": "678 LONGBRIDGE ROAD, DAGENHAM, RM8 2DD",
            "phoneNumber": "07700 390892",
            "network": "Vodafone",
            "latitude": 51.5388201799242,
            "longitude": 0.164398234134887,
            "idType": "CellTowerId",
            "id": 57376,
            "timeStamp": "2015-05-01T09:09:52.000Z"
        }
    ]
};

describe('testing all locationEvent endpoints', function() {
    
    beforeAll(async function(done) {
        let res = await request(app)
            .post('/login')
            .send({
                username: adminUser.username,
                password: adminUser.password
            });
        jest.setTimeout(1000000);
        token = res.body.token;
        done();
    });
    
    afterAll(function(done) {
        server.close();
        done();
    });

    it('should return eventId, time and details matching the search input', async (done) => {
        let res = await request(app)
            .post('/back-end/locationEvent/getLocationEventsInArea')
            .set("Authorization", token)
            .send(searchInput);
        jest.setTimeout(100000);
        expect(res.text).toBe(JSON.stringify(responseData));
        done();
    });
});