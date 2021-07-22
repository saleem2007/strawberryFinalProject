const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')

class Inventory extends Model { }

Inventory.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    size: DataTypes.INTEGER
})

module.exports = { Inventroy };
