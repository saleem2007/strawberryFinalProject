const express = require('express');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


const { Warehouse } = require('./models/Warehouse');
const { Category } = require('./models/Category');
const { Item } = require('./models/Item');

const index = require('./models/index');
index();

const PORT = 3000;

const app = express();

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static('public'));



app.get('/items', async(req, res) => {
    const items = await Item.findAll()
    res.render('items', { items }); //points to sauces handlebar
})

app.get('/item/:id', async(req, res) => {
    const items = await Item.findByPk(req.params.id)
    res.render('item', { items });
})

app.listen(PORT, async() => {
    await db.sync({ force: true })
    console.log(`Your server is running on http://localhost:${PORT}`);
})