const { Sequelize, DataTypes } = require("sequelize");
const rawdata = require('../middleware/service/person/background/config.json');

const sequelize = new Sequelize(rawdata);

const UserModel = sequelize.define("Users",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    
    {
        timestamps: false,
        freezeTableName: true
    }
);

UserModel.sync()
    .then(() => {
        UserModel.findOrCreate( { where: { username: "admin", password: "mypass" }});
        console.log(`Database & tables created!`);
    });

module.exports = UserModel;