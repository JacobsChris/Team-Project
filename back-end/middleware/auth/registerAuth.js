const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwtConfig = require('./jwtConfig.json');
const userModel = require('../../database/sequelize');

const jwtStrategy =  passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;
const parameters = {
    jwtFromRequest: extractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: jwtConfig.secret
};

const registerAuth = passport.use("register", new jwtStrategy(parameters, 
    function(jwtPayload, done) {
        userModel.findOne({ where: { username: jwtPayload.id, admin: jwtPayload.aud }})
            .then(user => {
                if (user.admin === 0) {
                    return done(null, false, { message: "invalid token, user does not have admin rights"})
                }
                else if (!user) {
                    return done(null, false, { message: "invalid toekn, user not authenticated"});
                }
                else {
                    return done(null, user, { message: "user authenticated"});
                }
        });
    }
));

module.exports = registerAuth;