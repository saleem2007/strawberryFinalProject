const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class Item extends Model { }

Item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.float(5, 2),
    image: DataTypes.STRING
})

module.exports = { Item };