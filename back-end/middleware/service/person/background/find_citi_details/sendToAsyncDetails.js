const {Sequelize} = require('sequelize');
//RDS authentication
const rawdata = require('../config.json');
const sequelize = new Sequelize(rawdata);
const {QueryTypes} = require('sequelize');
const async = require('./asyncCallDetails');

module.exports = {
    SQLauthenticate: function SQLauthenticate(Input) {
        let SearchQuery = sequelize.query(Input, {type: QueryTypes.SELECT})
        sequelize.authenticate().then(() => {
            console.log('Connection established successfully.');
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(async.asyncCall(SearchQuery));
                }, 2000);
            });
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        }).finally(() => {
            sequelize.close();
        });
    }
};

