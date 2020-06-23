const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    amazon:{
        name:String,
        imageurl : String,
        rating : String,
        price : Number,
        finalprice : Number
    },
    flipkart:{
        name:String,
        imageurl : String,
        rating : String,
        price : Number,
        finalprice : Number
    },
    snapdeal:{
        name:String,
        imageurl : String,
        rating : String,
        price : Number,
        finalprice : Number
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Product',productSchema)