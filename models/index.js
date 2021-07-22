const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')
const {Category} = require('./Category');
const {Inventory} = require('./Inventory');
const {Item} = require('./Item');
const {Order} = require('./Order');
const {User} = require('./User');


//creating Association between models
Item.belongsTo(Inventory);
Inventory.hasMany(Item);
Item.belongsTo(Category);
Category.hasMany(Item);
Item.belongsTo(Order);
Order.hasMany(Item);
Order.belongsTo(User);
User.hasMany(Order);

module.export = { Category, Inventory, Item, Order, User };