const jwt = require('jsonwebtoken');
const jwtKey = require('../../../back-end/middleware/auth/jwtConfig.json');
const app = require('../../../back-end/app');
const request = require('supertest');

const userObj = {
    "username": "admin",
    "password": "mypass"
};

const successObj = {
    message: "user logged in"
};

describe('login test', function() {

    it("takes in a username and password and should return success message", async (done) => {
        const res = (await request(app))
            .post("/login/login")
            .send(userObj)
            .expect(successObj.message);
        done();
    });
});
