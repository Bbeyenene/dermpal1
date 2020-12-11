const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const userSchema = new Schema({
    title: { type: String, unique: false, required: true },
    catagory: { type: String, unique: false, required: true },
    description: { type: String, unique: false, required: true },
    image: { type: String, unique: false, required: true }
})

const Products = mongoose.model('product', userSchema)
module.exports = Products;