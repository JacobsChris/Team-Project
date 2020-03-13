const morgan = require('morgan');
const winston = require('./winston');

morgan.token("login-request", function(req, res) {
    let logObj = {
        user: req.body.username,
        response: res.body
    };
    return JSON.stringify(logObj)
});

module.exports = morgan(":remote-addr :login-request :date[web] :status", { stream: winston.stream });