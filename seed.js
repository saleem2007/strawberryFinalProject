const path = require('path');
const fs = require('fs').promises;

const {sequelize} = require('./db');
<<<<<<< HEAD
const {Item} = require('./models/Item');
=======
const {Item} = require('./models');
>>>>>>> 1c7fdbe35c4b2fb4385b37348b92d085c2a1902c


const seed = async () => {

    await sequelize.sync({ force: true });

    const seedPath = path.join(__dirname, 'items.json'); // creates path to seed data
    const buffer = await fs.readFile(seedPath); // reads json
    const {data} = JSON.parse(String(buffer)); //parses data

<<<<<<< HEAD
    const itemPromises = data.map(item => Item.create(item))
    await Promise.all(itemPromises)
=======
    const dataPromises = data.map(item => Item.create(item))
    await Promise.all(dataPromises)
>>>>>>> 1c7fdbe35c4b2fb4385b37348b92d085c2a1902c
    console.log("db populated!")
}


module.exports = seed
