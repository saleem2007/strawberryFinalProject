const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')

class Category extends Model { }

Category.init({
    name: DataTypes.STRING
})

module.exports = { Category };
