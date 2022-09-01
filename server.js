const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/db');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' +config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Connected to database ' +err);
})

const app = express();

const categories = require('./routes/categories');
const drinks = require('./routes/drinks');
const qty = require('./routes/qty');
const order = require('./routes/orders');

const { database } = require('./config/db');

app.use(cors());
app.use(bodyParser.json());

app.use('/categories', categories);
app.use('/drinks', drinks);
app.use('/qty', qty);
app.use('/order', order);

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});