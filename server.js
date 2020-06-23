const express = require("express");
const $ = require('cheerio');
const CronJob = require('cron').CronJob;
const queryString = require('query-string');

const amazon = require('./util/amazon.js');
const flipkart = require('./util/flipkart.js')

const bodyParser = require('body-parser');

const app = express();

const queries = [
    'apple iphone 11 (black 128 gb)',
    'Poco F1 by Xiaomi (Armored Edition, 8GB RAM, 256GB Storage)',
    'Redmi Note 8 Pro',
    'Vivo Y15',
    'Honor 9X',
    'Oppo F15 (Unicorn White, 8GB RAM, 128GB Storage)',
    'Apple Iphone 7(32GB)',
    'Samsung Galaxy M40',
    'LG G8X',
    'Redmi Note 9 Pro Max'
];

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())



const getData = () => {
    const Aproductinfo = [];
    const Flipkart = [];
    const SnapDeal = [];
    process.setMaxListeners(0);
    queries.forEach((query) => {
        Aproductinfo.push(amazon.getprod(amazon.baseURL+queryString.stringify({k:query})))
    })
    Promise.all(Aproductinfo).then(()=>{console.log(Aproductinfo)});
    /*queries.forEach((query) => {
        Flipkart.push(flipkart.getprod(flipkart.baseURL+queryString.stringify({q:query})))
    })
    Promise.all(Flipkart).then(()=>{console.log(Flipkart)});*/
}

app.get('/', (req, res) => {
    res.json({"message": "Hey"});
});

getData();

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});