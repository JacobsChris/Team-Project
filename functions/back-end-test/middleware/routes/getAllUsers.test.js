const request = require('supertest');
const app = require('../../../back-end/app');
const adminUser = require('../../adminUser.json');

const server = app;

const resObj = [{
    "id": 1,
    "username": "mynameisadmin",
    "password": "$2a$05$yVmRzsE0e939lprUdR4QROLBdyYm5XmsE0H/hYWbDJm2abjt3ZWbe",
    "admin": true
}];

let token = "";

describe('GET /getAllUsers', function() {
    
    beforeAll(async function(done) {
        let res = await request(app)
            .post('/login')
            .send(adminUser);
        token = res.body.token;
        done();
    });
    
    afterAll(function(done) {
        server.close();
        done();
    });

    it('should return all registered users in the db', async (done) => {
        let res = await request(app)
            .get('/admin/getAllUsers')
            .set("Authorization", token)
        expect(res.body).toEqual(resObj);
        done();
    });
});