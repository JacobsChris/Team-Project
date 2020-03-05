const {Sequelize} = require('sequelize');
//RDS authentication
const rawdata = require('./config.json');
const sequelize = new Sequelize(rawdata);
const {QueryTypes} = require('sequelize');
const async = require('./asyncCall');

module.exports = {
    SQLauthenticate: function SQLauthenticate(Input) {
        let SearchQuery = sequelize.query(Input, {type: QueryTypes.SELECT})
        sequelize.authenticate().then(() => {
            console.log('Connection established successfully.');
            async.asyncCall(SearchQuery);
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        }).finally(() => {
            sequelize.close();
        });
    }
};