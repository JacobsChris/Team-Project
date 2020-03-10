const app = require('../../../back-end/app');
const request = require('supertest');


const goodUser = {
    "username": "admin",
    "password": "mypass"
};

const badUser = {
    "username": "root",
    "username": "root"
};

const success = "user logged in";

const failure = "unauthorized";

describe('login test', function() {

    afterEach(function (done) {
        const server = app;
        server.close();
        done();
    });

    it("takes in correct username and password and should return success message", async () => {
        let res = await request(app)
            .post("/login")
            .send(goodUser);
        expect(res.body.message).toBe(success);
    });

    it("takes in invalid username and password and should return failure message", async () => {
        let res = await request(app)
            .post("/login")
            .send(badUser);
        expect(res.text).toBe(failure);
    });
});
