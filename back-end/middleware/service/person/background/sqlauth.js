const {Sequelize} = require('sequelize');
//RDS authentication
const rawdata = require('./config.json');
const sequelize = new Sequelize(rawdata);
const {QueryTypes} = require('sequelize');
const async = require('./asyncCall');

module.exports = {
    /** does some stuff */
    SQLauthenticate: function SQLauthenticate(Input) {
        return sequelize.query(Input, {type: QueryTypes.SELECT});
    }
};