const jwt = require('jsonwebtoken');
const jwtKey = require('../../../back-end/middleware/auth/jwtConfig');
const app = require('../../../back-end/app');
const request = require('supertest');

const agent = request.agent(app); 

const userObj = {
    "username": "admin",
    "password": "mypass"
};

const successObj = {
    auth: true,
    token: "JWT" + jwt.sign({ id: userObj.username }, jwtKey.secret, { expiresIn: 1800 }),
    message: "user logged in"
};

test("should return success object", (done) => {
    agent.post("/test/login")
        .send(userObj)
        .expect(200, successObj)
        .end(done);
});


module.exports = agent;