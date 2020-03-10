const morgan = require("morgan");
const passportJWT = require("passport-jwt");
const extractJWT = passportJWT.ExtractJwt;
const jwtConfig = require('../auth/jwtConfig');
const passport = require('passport');
const jwtStrategy = passportJWT.Strategy;


const parameters = {
    jwtFromRequest: extractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: jwtConfig.secret
};

morgan.token('user', function (req, res) {
    return passport.use(new jwtStrategy(parameters,
        function (jwtPayload, done) {

            return jwtPayload.id


        }))

});


morgan.token('request', function (req, res) {
    return JSON.stringify(req.query);
});


module.exports = morgan(":remote-addr :user :request :date[clf] :status");


