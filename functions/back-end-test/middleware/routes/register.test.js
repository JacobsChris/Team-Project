const request = require('supertest');
const app = require('../../../back-end/app');
const userModel = require('../../../back-end/database/sequelize');
const adminUser = require('../../adminUser.json');

const newUser = {
    "username": "testtest",
    "password": "Password123!",
    "isAdmin": false
};

const server = app;

let token = "";

describe('POST to /register', () => {
    
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
        userModel.destroy({ where: {username: newUser.username}});
        server.close();
        done();
    });
    
    it('should create a user when logged in as admin', async (done) => {
        let res = await request.agent(app)
            .post('/admin/register')
            .set("Authorization", token)
            .send(newUser);
        expect(res.text).toBe("user is created");
        done();
    });

    it('should update a user\'s password if the user already exists', async (done) => {
        let res = await request.agent(app)
            .post('/admin/register')
            .set('Authorization', token)
            .send({
                "username": newUser.username,
                "password": "Password1234!",
                "isAdmin": newUser.isAdmin
            });
        expect(res.text).toBe("user updated");
        done();
    });

    it('should return an error message if username AND password already exists', async (done) => {
        let res = await request.agent(app)
            .post('/admin/register')
            .set('Authorization', token)
            .send({
                "username": newUser.username,
                "password": "Password1234!",
                "isAdmin": newUser.isAdmin
            });
        expect(res.text).toBe("username already taken");
        done();
    });
});