const app = require('../../../back-end/app');
const request = require('supertest');


const goodUser = {
    "username": "mynameisadmin",
    "password": "Mypass123!"
};

const badUser = {
    "username": "root",
    "password": "root"
};

const success = "user logged in";

const failure = "Unauthorized";

const server = app;

describe('login test', function() {


    afterEach(function(done) {

        server.close();
        done();
    });

    it("takes in correct username and password and should return success message", async (done) => {
        let res = await request(app)
            .post("/login")
            .send(goodUser);
        expect(res.body.message).toBe(success);
        done();
    });

    it("takes in invalid username and password and should return failure message", async (done) => {
        let res = await request(app)
            .post("/login")
            .send(badUser);
        expect(res.text).toBe(failure);
        done();
    });
});
