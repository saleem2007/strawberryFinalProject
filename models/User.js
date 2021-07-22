const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')

class User extends Model { }

User.init({
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING
})

module.exports = { User };
