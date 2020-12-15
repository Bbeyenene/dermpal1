const mongoose = require('mongoose')
const Schema = mongoose.Schema


const product = new Schema({
    title: {type:String},
    category: {type:String},
    description: {type:String},
    image: {type:String},
    username: {type:String, required: true},

});



const Product = mongoose.model('product', product);
module.exports = Product;