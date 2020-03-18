const request = require('supertest');
const app = require('../../../back-end/app');
const adminUser = require('../../adminUser.json');


const server = app;

const resObj = [adminUser.hashedUser];

let token = "";

describe('GET /getAllUsers', function() {
    
    beforeAll(async function(done) {
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

    it('should return all registered users in the db', async (done) => {
        let res = await request(app)
            .get('/admin/getAllUsers')
            .set("Authorization", token)
        expect(res.body).toEqual(resObj);
        done();
    });
});