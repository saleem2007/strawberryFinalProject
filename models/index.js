const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')
const {Category} = require('./Category');
const {Inventory} = require('./Inventory');
const {Item} = require('./Item');
const {Order} = require('./Order');
const {User} = require('./User');


class Sauce extends Model {}

Sauce.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Sauce};