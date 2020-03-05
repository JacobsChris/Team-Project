const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("userDB", "dbuser", "password", {
    host: "localhost",
    dialect: "mysql"
});

const UserModel = sequelize.define("user",
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

UserModel.sync({force: true})
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports = UserModel;