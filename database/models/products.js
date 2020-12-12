const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const productSchema = new Schema({
    title: { type: String, unique: false, required: true },
    category: { type: String, unique: false, required: false },
    description: { type: String, unique: false, required: false },
    image: { type: String, unique: false, required: false },
    // review: { type: String, unique: false, required: false },
    
}


);

const Products = mongoose.model('product', productSchema)
module.exports = Products;