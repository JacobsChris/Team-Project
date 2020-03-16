const passportJWT = require('passport-jwt');
const jwtConfig = require('./jwtConfig.json');
const userModel = require('../../database/sequelize');

const jwtStrategy =  passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;
const parameters = {
    jwtFromRequest: extractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: jwtConfig.secret
};

const adminAuth = new jwtStrategy(parameters, function(jwtPayload, done) {
    userModel.findOne({ where: { username: jwtPayload.id, admin: jwtPayload.admin }})
        .then(user => {
            if (user.admin === false) {
                return done(null, false, { message: "invalid token, user does not have admin rights"})
            }
            else if (user.admin === true) {
                return done(null, user, { message: "user authenticated"});
            }
            return done(null, false, { message: "invalid token, user not authenticated"});

    });
});

module.exports = adminAuth;