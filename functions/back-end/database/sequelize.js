const { Sequelize, DataTypes, Model } = require("sequelize");
const bcrypt = require('bcryptjs');
const rawdata = require('../middleware/service/config');

const sequelize = new Sequelize(rawdata);

class UserModel extends Model {

    // class level method
    static passwordHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(5));
    }

    // instance level method
    validPassword(password) {
        if (bcrypt.compareSync(password, this.password)) {
            return true;
        }
        else if (password === this.password) {
            return true;
        }
    }
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Users",
    timestamps: false
});

UserModel.sync()
    .then(() => {
        console.log("database connected");
    });

module.exports = UserModel;
