const {Sequelize} = require('sequelize');
//RDS authentication
const rawData = require('./config.json');
const sequelize = new Sequelize(rawData);
const {QueryTypes} = require('sequelize');


module.exports =
    /**
     *  @author Anthony Wilkinson & Chris
     *  @function this function searches the database using sequelize and config.json in tandem using a queryType of select it
     *  then returns the information as a JSON object
     *  @development  as for this project the only reason to access the database would be to select from the DB. If an objective were to implement
     *  any of the CRUD functionality then this could be engineered through similar SQLauthenticate functions which would have a
     *  different type.
     *  @return this function returns an object depending on what input parameters were searched. This function is able to be
     *  used in a variety of ways and is why it is reused for the multiple functions
     *  @require this function to work meerly needs an input in a MYSQL syntax to search the database
     *  */
    function SQLauthenticate(Input) {
        return sequelize.query(Input, {type: QueryTypes.SELECT});
    };