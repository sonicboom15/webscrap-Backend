const Product = require('../models/products.js');

exports.createAll = (data) => {
    data.forEach(element => {
        const product = new Product({
            name:element.name,
            amazon:{
                name:element.amazon.name,
                imageurl:element.amazon.imageurl,
                rating:element.amazon.rating,
                price:element.amazon.price,
                finalprice:element.amazon.finalprice
            },
            flipkart:{
                name:element.flipkart.name,
                imageurl:element.flipkart.imageurl,
                rating:element.flipkart.rating,
                price:element.flipkart.price,
                finalprice:element.flipkart.finalprice
            },
            snapdeal:{
                name:element.snapdeal.name,
                imageurl:element.snapdeal.imageurl,
                rating:element.snapdeal.rating,
                price:element.snapdeal.price,
                finalprice:element.snapdeal.finalprice
            },
        })

        product.save();
    });
}

exports.findAll = (req,res) => {
    Product.find().then(product => {
        res.send(product);
    }).catch(err => {
        res.status(500).send({
            message:err.message||"Internal Server Error"
        })
    })
}

exports.findSome = (req,res) => {
    if(!req.body.query){
        return res.status(400).send({
            message:"Empty Query"
        });
    }

    Product.find().then(product => {
        res.send(product.filter((product) => (product.name).includes(req.body.query)));
    }).catch(err =>{
        res.status(500).send({
            message: err.message||"Internal Server Error"
        })
    })
}