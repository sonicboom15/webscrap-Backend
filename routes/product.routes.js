module.exports = (app) => {
    const product = require('../controller/product.controller.js');

    app.put('/product/:productId', product.update);
    app.get('/product', product.findAll);
    app.get('/searchProduct', product.findSome); 
}