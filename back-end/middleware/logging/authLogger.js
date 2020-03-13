const morgan = require('morgan');
const winston = require('winston');
const { DynamoDB } = require('winston-dynamodb');
const options = require('./AuthDB.json')

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [new winston.transports.DynamoDB(options)],
    exitOnError: false
});

logger.stream = {
    write: function(message) {
        logger.info(message);
    }  
};

morgan.token("login-request", function(req, res) {
    let logObj = {
        user: req.body.username,
        response: res.body
    };
    return JSON.stringify(logObj)
});

module.exports = morgan(":remote-addr :login-request :date[web] :status", { stream: logger.stream });