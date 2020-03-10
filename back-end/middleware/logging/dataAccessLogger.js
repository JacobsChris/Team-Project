const morgan = require("morgan");
const jwt = require('jsonwebtoken');
const jwtConfig = require('../auth/jwtConfig.json');

morgan.token('user', function (req, res) {
    //grab token from req header and match to user in auth
    let jwtPayload = req.header('Authorization').replace("JWT ", "");
    let userObj = jwt.verify(jwtPayload, jwtConfig.secret);
    return JSON.stringify(userObj);
});


morgan.token('request', function (req, res) {
    return JSON.stringify(req.query);
});


module.exports = morgan(":remote-addr :user :request :date[clf] :status");


