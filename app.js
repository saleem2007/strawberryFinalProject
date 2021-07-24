const express = require('express');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


const Warehouse = require('./models/Warehouse');
const Category = require('./models/Category');
const Item = require('./models/Item');

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



app.get('/select-warehouse', async(req, res) => {
    const warehouses = await Warehouse.findAll()
    res.render('warehouse-form', { warehouses });
})

app.get('/warehouse/:id', async(req, res) => {
    const warehouse = await Warehouse.findByPk(req.params.id, {
        include: {
            model: Category
        }
    });
    res.render('warehouse', { warehouse });
})

app.get('/warehouse/:id/items', async(req, res) => {
    const warehouse = await Warehouse.findByPk(req.params.id, {
        include: {
            model: Category,
            include: Item
        }
    });
    res.render('all-items-in-warehouse', { warehouse });
})




app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
})