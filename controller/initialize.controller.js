const amazon = require('../util/amazon.js');
const flipkart = require('../util/flipkart.js');
const snapdeal = require('../util/snapdeal.js');

const queries = [
    'Apple Iphone 11 (Black 128 gb)',
    'Poco F1 by Xiaomi (Armored Edition, 8GB RAM, 256GB Storage)',
    'Redmi Note 8 Pro',
    'Vivo Y15',
    'Honor 9X',
    'Oppo F15 (Unicorn White, 8GB RAM, 128GB Storage)',
    'Apple Iphone 7(32GB)',
    'Samsung Galaxy M40',
    'Redmi Note 9 Pro Max'
];

const getData = () => {
    const Aproductinfo = [];
    const Flipkart = [];
    const SnapDeal = [];

    queries.forEach((query) =>{
        amazon.getprod(queryString.stringify({k:query})).then((result) =>{Aproductinfo.push(result)})
    })
    queries.forEach((query) =>{
        flipkart.getprod(queryString.stringify({q:query})).then((result) =>{Flipkart.push(result)})
    })
    queries.forEach((query) =>{
        snapdeal.getprod(queryString.stringify({q:query})).then((result) =>{SnapDeal.push(result)})
    })
    console.log(amazon);
}
