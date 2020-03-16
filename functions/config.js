// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    host: process.env.host,
    password: process.env.password,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    secret: process.env.secret
};