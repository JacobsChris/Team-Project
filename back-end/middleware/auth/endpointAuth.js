const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwtConfig = require('./jwtConfig');
const userModel = require('../../database/sequelize');

const jwtStrategy =  passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;
const parameters = {
    jwtFromRequest: extractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey : jwtConfig.secret
}

const endpointAuth = passport.use("jwt", new jwtStrategy(parameters, 
    function(jwtPayload, done) {
        userModel.findOne({ where: { username: jwtPayload.id }})
            .then(user => {
                if (user) {
                    return done(null, user, { message: "user authenticated" });
                }
                else {
                    return done(null, false, { message: "invalid token, user not authenicated" });
                }
        });
    }
));

module.exports = endpointAuth;