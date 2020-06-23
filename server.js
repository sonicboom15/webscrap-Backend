const express = require("express");
const $ = require('cheerio');

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully Connected to DB");
}).catch(err => {
    console.log('Could not connect to DB.', err);
});

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({ "message": "Hey" });
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});