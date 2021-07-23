const path = require('path');
const fs = require('fs').promises;

const {sequelize} = require('./db');
const {Item} = require('./models/Item');


const seed = async () => {

    await sequelize.sync({ force: true });

    const seedPath = path.join(__dirname, 'items.json'); // creates path to seed data
    const buffer = await fs.readFile(seedPath); // reads json
    const {data} = JSON.parse(String(buffer)); //parses data

    const itemPromises = data.map(item => Item.create(item))
    await Promise.all(itemPromises)
    console.log("db populated!")
}


module.exports = seed