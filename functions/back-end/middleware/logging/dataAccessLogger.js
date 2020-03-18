const morgan = require("morgan");
const jwt = require('jsonwebtoken');
const jwtConfig = require('../auth/jwtConfig.json');
const winston = require('winston');
const { DynamoDB } = require('winston-dynamodb');
const options = require('./DataAccessDB.json');

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.DynamoDB(options)
    ],
    exitOnError: false
});

logger.stream = {
    write: function(message) {
        logger.info(message);
    }  
};

morgan.token('user', function (req, res) {
    //grab token from req header and match to user in auth
    let jwtPayload = req.header('Authorization').replace("JWT ", "");
    let userObj = jwt.verify(jwtPayload, jwtConfig.secret,
        (error, decoded) => {
            if (error) {
                return error;
            }
            else {
                return decoded;
            }
    });
    return JSON.stringify(userObj);
});

morgan.token('request', function (req, res) {
    let reqObj = {
        request: req.body,
        token: req.headers.authorization 
    };
    return JSON.stringify(reqObj);
});


module.exports = morgan(":remote-addr :request :date[web] :url :method :status", { stream: logger.stream });


