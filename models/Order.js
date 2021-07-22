const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')

class Order extends Model { }

Order.init({
    numItems: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
})

module.exports = { Order };
