const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userModel = require('../../database/sequelize');

const router = express.Router();

const loginAuth = passport.use("login", new LocalStrategy(

    function(username, password, done) {
        userModel.findOne({ where: { username: username }})
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            else if (password != user.password) {
                return done(null, false, { message: "Incorrect password" });
            }
            else {
                return done(null, user);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
));

module.exports = loginAuth;

// bcrypt.compare(password, user.password)
//                     .then(result => {
//                         if (!result) {
//                             return done(null, false, {message: "Incorrect password."});
//                         }
//                         return done(null, user);
//                 });
