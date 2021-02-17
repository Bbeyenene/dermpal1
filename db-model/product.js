const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define product schema//
const product = new Schema({
  title: { type: String },
  category: { type: String },
  description: { type: String },
  image: { type: String },
  username: { type: String, required: true },
  rate: [{ type: Schema.Types.ObjectId, ref: "rating" }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  store: [
    {
      type: Schema.Types.ObjectId,
      ref: "storeInfo",
    },
  ],
});

const Product = mongoose.model("product", product);
module.exports = Product;
