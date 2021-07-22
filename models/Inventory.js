const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')

class Inventory extends Model { }

Inventory.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    size: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
});

module.exports = { Inventory };
