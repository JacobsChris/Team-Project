const request = require('supertest');
const app = require('../../../back-end/app');
const adminUser = require('../../adminUser.json');

const server = app;

let token = "";