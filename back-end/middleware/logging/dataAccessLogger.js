const morgan = require("morgan");


morgan.token('user', function (req, res) {
    //grab token from req header and match to user in auth

});


morgan.token('request', function (req, res) {
    return JSON.stringify(req.body);
});


module.exports = morgan(":remote-addr :request :date[clf] :status");


